import React, { useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const {loggedInUser} = useContext(UserContext);

    //subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items)
    
    return (
        <div className='flex justify-between bg-pink-200'>
            <div className='logo-container'>
            <img className='w-24 h-16' src={LOGO_URL}/>
            </div>   
            <div className='flex items-center'>
            <ul className='flex p-2 m-2'>
                    <li className='px-4'> <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Home</Link></li>
                    <li className='px-4'> <Link to="/about" style={{textDecoration: 'none', color: 'black'}}>About Us</Link></li>
                    <li className='px-4'> <Link to="/contact" style={{textDecoration: 'none', color: 'black'}}>Contact Us</Link></li>
                    <li className='px-4'><Link to='/cart' className='text-black'>Cart ({cartItems.length})</Link></li>
                    <li className='px-4 font-bold'>{loggedInUser}</li>
            </ul>
            </div>
            
        </div>

    )
}

export default Header;
