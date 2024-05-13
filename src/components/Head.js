import React from "react";
import search_logo from "../utils/assets/search.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Head = () => {

    const dispatch = useDispatch();
    
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
    
    
    
    return(
        <div className = "grid grid-flow-col p-2 m-2 shadow-md">
            <div className = "flex gap-4 col-span-2"> 
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdOvIaGkcc-iALkAPYRD-SxkqggLTaLMYqqNjsGr8MhCDEaLe-LST3ujdH1xIgumMR4cM&usqp=CAU" alt="hamberger_img" className="h-8 cursor-pointer" onClick = {()=> toggleMenuHandler()}/>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TdQa9xvFpj9ZPBKS2HlJauJZyVzqOuUI8ROCBMAX&s" alt="logo" className="h-8" />
                
            </div>

            <div className = "flex flex-row col-span-10 px-[8%] text-center">
                <input type="text" placeholder="Search" className="p-1 px-6 w-1/2 border-gray-200 border-2 rounded-s-3xl placeholder-slate-500 border-r-0" />
                <button className = "p-2 px-5 bg-gray-100 border-gray-200 border-2 rounded-e-3xl"><img src = {search_logo} className = "px-1 h-6" alt="icon"/></button>
            </div>
           
            <div className="col-span-1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQna96LOHsB0K43Ybx1vGQyqq4IKX9k_1xW_am2qdgT-Q&s" alt="user_icon" className = "h-8" />
            </div>
            
        </div>
    )
}


export default Head;