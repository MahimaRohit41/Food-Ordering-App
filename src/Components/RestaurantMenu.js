import React, { useState } from 'react';
import { useEffect } from 'react';
import Shimmer from './Shimmer';
import MenuCard from './MenuCard';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [showIndex, setShowIndex] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const menuData = await fetch(MENU_API + resId);
        const jsonMenuData = await menuData.json();
        setResInfo(jsonMenuData.data);

    }
    if (resInfo === null)
        return <Shimmer />


    const { name, cuisines, cloudinaryImageId, costForTwoMessage, areaName, avgRating, totalRatingsString } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // console.log(resInfo?.cards[0]?.card?.card?.info);
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories);
    return (
        <div>
            <div className='w-6/12 m-auto flex justify-between'>
                <div>
                    <h1 className='font-bold my-4 text-2xl'>{name}</h1>
                    <div className='text-md'>{cuisines.join(",")}</div>
                    <div className='text-md'>{areaName}</div>
                </div>


                <div className='my-4 p-2 border border-gray-300 rounded-md'>
                    <div>⭐{avgRating}</div>
                    <div className='text-sm'>{totalRatingsString}</div>
                </div>
            </div>

            {/* <h3>{costForTwoMessage}</h3>
            {
                itemCards.map((item) => (<MenuCard key={item?.card?.info?.id} menuInfo={item?.card?.info}/>) )
            } */}

            {categories.map((c,index) => <RestaurantCategory 
            key={c.card.card.title} 
            data={c?.card?.card} 
            showItem={index=== showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
            />)}

        </div>
    )
}

export default RestaurantMenu;
