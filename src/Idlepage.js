import React from 'react'
import './idle.css'

function Idlepage() {
    const image_add= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7Opc_u72XGienEZ6ncMo5vuRmJ4IzXdKBw&usqp=CAU";
    return (
        <div className="ideal__page">
            <img src={image_add} alt="page image is there" id ="img1"/>
            <img src={image_add} alt="page image is there" id ="img2"/>
        </div>
    )
}

export default Idlepage
