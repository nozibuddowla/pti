import React, { createContext, useState } from 'react'
import useFoods from '../Hooks/useFoods';
import PropTypes from 'prop-types'; 

export const FoodContext = createContext(null);

const ContextProvider = ({children}) => {
    const [foods, refetch] = useFoods();
    const [updateItem, setUpdateItem] = useState(foods);

    const foodInfo = {
        foods,
        refetch,
        setUpdateItem,
        updateItem
      }
  return (
    <div>
        <FoodContext.Provider value={foodInfo}> {children} </FoodContext.Provider>
    </div>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider