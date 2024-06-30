import React from 'react'
import { CDN_URL } from '../utils/constants';

const RestaurantsCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, aggregatedDiscountInfoV3} = props.resData.info;

  return (
    <div className='m-4 p-4 w-[200px] bg-gray-50 h-96 hover:border border-gray'>
      <div>
      <label className='relative top-0 opacity-100'>{aggregatedDiscountInfoV3.header +" " + aggregatedDiscountInfoV3.subHeader }</label>

      <img className='h-48 rounded-md' src={CDN_URL + cloudinaryImageId}/>
      </div>
       
    <h3 className='font-bold py-2 font-serif'>{name}</h3>
    <h4 className='overflow-hidden overflow-ellipsis'>{cuisines.join(",")}</h4>
    <h4>{avgRating} ⭐</h4>
    <h4>{costForTwo}</h4>
    </div>
  )
}

//Higher Order Compenent
//Input - RestaurantCard => Output - RestaurantCard with label promoted

export const withPromotedLable = () => {
    return (props) => {
      return (
        <div>
          <label>Promoted</label>
          <RestaurantsCard {...props}/>
        </div>
      )
    }
}

export default RestaurantsCard