import React from 'react'
import { CDN_URL } from '../utils/constants';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const ItemList = (props) => {
    // console.log(props.itemlist);
    const { itemlist } = props;
    const dispatch = useDispatch();

    const handleClick = (item) => {
        //Dispatch an action
        dispatch(addItem(item))
    }
    return (
        <div>
            {
                itemlist.map((item) => (
                    <div key={item.card.info.id} className='m-2 p-2 border-b-2 text-left flex justify-between'>
                        <div className='w-10/12'>
                            <div>
                                <div className='font-bold'>{item.card?.info?.name}</div>
                                <div>₹ {item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100}</div>
                            </div>
                            <p>{item.card.info.description}</p>
                        </div>
                        <div className='w-2/12'>
                            
                            <div className='absolute'>
                                <button className='text-green-400 rounded-md bg-gray-100 px-2' onClick={ () => handleClick(item)}>Add</button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} />
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ItemList