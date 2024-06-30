import React, { useEffect, useState } from 'react'
import RestaurantsCard, { withPromotedLable } from './RestaurantsCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';



const Body = () => {
    const [listofResturants, setListofResturants] = useState([]);
    const [showRes,setShowRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantsCardPromoted = withPromotedLable(RestaurantsCard);

    const getData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1087928&lng=72.8626251&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        setListofResturants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setShowRes(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(listofResturants);
    }

    useEffect(() => { getData() }, []);

    const onlineStatus = useOnlineStatus();

    if(onlineStatus===false)
        return <h1>Looks like you're Offline!! Please check your internet connection...</h1>

    if (listofResturants.length === 0)
        return <Shimmer />

    return (
        <div className='body'>
            <div className='filter'>
                <input type='text' className='m-2 border border-solid border-black' value={searchText} onChange={
                    (e) => {
                        setSearchText(e.target.value)
                    }} />
                <button className='bg-green-100 m-2 px-4 py-1 rounded-md' onClick={() => {
                    const filteredRestaurants = listofResturants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setShowRes(filteredRestaurants)
                }

                }>
                    Search</button>
                <button className='px-4 py-1 mx-4 bg-gray-100 rounded-md' onClick={() => {
                    const topResturants = listofResturants.filter(res=> res.info.avgRating>=4.5)
                    setShowRes(topResturants)
                }}>Top Rated Restaurants</button>
            </div>
            <div className='flex flex-wrap'>
                {
                    showRes.map(res => (
                    <Link key={res?.info?.id} style={{textDecoration: 'none', color: 'black'}} to={"/restaurants/"+res?.info?.id}><RestaurantsCard  resData={res} /></Link>))
                }
            </div>
        </div>

    )
}

export default Body;
