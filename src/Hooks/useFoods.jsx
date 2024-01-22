import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

const useFoods = () => {
     // 1. useQuery hook is used to make a data-fetching query.
    const {data:foods ,refetch} = useQuery({
         // 2. queryKey is an array that serves as a unique identifier for this query.
        queryKey: ["foods"],
        // 3. queryFn is an asynchronous function that fetches the data.
        queryFn: async () => {
            const res = await axios.get(
                "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
              );
        
              return res.data.Items;
        }
    });
    return [foods,refetch];
}

export default useFoods