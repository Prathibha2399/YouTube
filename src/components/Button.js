import React from "react";


const Button = ({name}) => {
    return(
        <div>
            <button className = "border rounded-lg bg-gray-100 font-semibold px-3 py-1 m-3 text-nowrap hover:bg-gray-200 active:bg-black active:text-white">{name}</button>
        </div>
    )
}


export default Button;