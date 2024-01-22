import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FoodContext } from "../../Context/ContextProvider";
import axios from 'axios';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const imgBbUploadKEy = process.env.REACT_APP_IMGBBKEY?.toString();
const photoUploadApi = `https://api.imgbb.com/1/upload?key=${imgBbUploadKEy}`;



const AddFood = ({ setModalVisible, modalVisible }) => {
    console.log('modalVisible in AddFood:', modalVisible);
    const {register, handleSubmit, formState: { errors }} = useForm();

      const { foods, refetch, setUpdateItem } = useContext(FoodContext);
      const [Id, setId] = useState(0);
    //   const [modalVisible, setModalVisible] = useState(false);

      useEffect(() => {
        const storeFoods = localStorage.getItem('foods');
        if (storeFoods) {
            const parseFoods = JSON.parse(storeFoods);
            setUpdateItem(parseFoods);
        }
      }, [setUpdateItem]);

      const onSubmit = async (data) => {
        const imageFile = {image: data?.photourl[0]};
        const res = await axios.post(photoUploadApi, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        const ImageUrl = res.data?.data?.display_url;
        setId(Id + 1);
        const Name = data?.Name;
        const Price = parseInt(data?.Price);
        const IsPopular = data?.IsPopular;
        const IsRecommended = data?.IsRecommended;

        if (IsPopular === false && IsRecommended === false) {
            setModalVisible(false);
            return Swal(
                'opps', 
                `Please select atleast one between IsPopular & IsRecommended`,
                'error'
            );
        }

        const newItem = {
            Id,
            Name,
            Price,
            ImageUrl,
            IsPopular,
            IsRecommended
        }

        const modal = document.getElementById("my_modal_3");
        modal.close();
        const storedFoods = localStorage.getItem("foods");

        if (storedFoods) {
            const parsedFoods = JSON.parse(storedFoods);
            const updatedFoods = [...parsedFoods, newItem];
            localStorage.setItem("foods", JSON.stringify(updatedFoods));
            setUpdateItem(updatedFoods);
            Swal("Good job!", `${Name} added`, "success");
            refetch();
        } else {
            localStorage.setItem("foods", JSON.stringify([...foods, newItem]));
            setUpdateItem([...foods, newItem]);
            Swal("Good job!", `${Name} added`, "success");
            refetch();
        }
    }

  return (
    <div id="my_modal_3" className={`modal ${modalVisible ? 'show' : ''}`}>
        <div className='modal-box bg-[#EEEFF0]'>
            <form method='dialog'>
                <button onClick={() => setModalVisible(false)} className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>X</button>
            </form>
            <form onSubmit={handleSubmit(onSubmit)} className='md:grid md:gap-6 gap-2 md:space-y-0 space-y-4 grid-cols-2'>
                <div>
                    <label htmlFor="Name" className='mb-2 inline-block text-sm text-dark sm:text-base'>Item Name</label>
                    <input type="text" {...register("Name", { required: true })} placeholder="Item Name" className="w-full text-sm rounded border bg-gray-50 px-3 py-2 text-dark outline-none" />{' '}
                    {errors.Name?.type === 'required' && (<p className="text-red-500 text-sm" role="alert">Name is required</p>)}
                </div>

                <div>
                    <label htmlFor="Price" className='mb-2 inline-block text-sm text-dark sm:text-base'>Item Price</label>
                    <input type="number" {...register("Price", { required: true })} placeholder="Item Price" className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none" />{' '}
                    {errors.Price?.type === "required" && (<p className="text-red-500 text-sm" role="alert">Price is required</p>)}
                </div>

                <div className="form-control">
                    <label className="cursor-pointer label p-0"><span className="label-text">Is Popular?</span>
                        <input type="checkbox" {...register("IsPopular")} className="checkbox " />
                    </label>
                </div>

                <div className="form-control">
                    <label className="cursor-pointer label p-0"><span className="label-text">Is Recommended?</span>
                        <input type="checkbox" {...register("IsRecommended")} className="checkbox" />
                    </label>
                </div>

                <input type="file" {...register("photourl", { required: true })} className="file-input file-input-bordered file-input-sm w-full max-w-xs" />{" "}
                {errors.photourl?.type === "required" && (<p className="text-red-500 text-sm" role="alert">Food Image is required</p>)}

                <div className="col-span-2 mt-6">{" "}
                    <button type="submit" className="btn w-full btn-sm btn-neutral">Add Item</button>
                </div>
            </form>
        </div>
    </div>
  )
}

AddFood.propTypes = {
    setModalVisible: PropTypes.func.isRequired,
    modalVisible: PropTypes.bool.isRequired, 
  };

export default AddFood