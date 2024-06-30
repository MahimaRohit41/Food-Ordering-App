import React from 'react'

const MenuCard = (props) => {

    const {name, description, defaultPrice, imageId} = props?.menuInfo;
    
  return (
    <div className='border border-b-2 flex justify-between w-6/12 mx-auto my-4 p-4'>
        <div className='menucard-desc'>
        <h3>{name}</h3>
        <h5>{description}</h5>
        <h5>{"Rs : " + defaultPrice/100}</h5>
        </div>
  
        <img className="w-20 h-20"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+ imageId}/>
    </div>
    
    
  )
}

export default MenuCard;
