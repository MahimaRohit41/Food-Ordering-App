import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data,showItem,setShowIndex}) => {
    // console.log(props.data);
    
    // const {showItem} = props.showItem;
    // const {title, itemCards} = props.data;

    const handleClick = () => {
        setShowIndex();
    }
  return (
    <div className='w-6/12 mx-auto my-2  p-2 shadow-lg '>
        <div className='flex justify-between cursor-pointer'onClick={handleClick} >
        <span className='font-bold'>{data.title} ({data.itemCards?.length}) </span>
        <span>🔽</span>
        </div>
        {showItem && <ItemList itemlist={data.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory