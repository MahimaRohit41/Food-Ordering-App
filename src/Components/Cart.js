import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuCard from './MenuCard';
import ItemList from './ItemList';
import { clearCart, removeItem } from '../utils/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch()
    console.log(cartItems);

    const handleClearCart = () => {
        dispatch(clearCart()); 
    }
    return (
        <div className='text-center'>
            <h2 className='m-4 p-4 text-xl'>Cart</h2>
            {cartItems.length!=0 && <button className='p-2 m-2 bg-black text-white rounded-md' onClick={handleClearCart}>Clear Cart</button>}
            {cartItems.length === 0 && <h1>Cart is Empty. Add items to the cart!!</h1>}
            <div className='w-6/12 m-auto '>
                <ItemList itemlist={cartItems} />
            </div>


            {/* {
            cartItems.map((item) => ( 
                <MenuCard menuInfo={item.card.info}/>
            ))
        } */}

        </div>
    )
}

export default Cart