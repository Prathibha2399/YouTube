import React from "react";
import { useSelector } from "react-redux";


const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen) return null;   /// Early return

    return (
        <div className = "p-5 w-48 shadow-lg">
            <div className = "pb-[10%] pt-[5%]">
                <ul>
                    <li>Home</li>
                    <li>Shorts</li>
                    <li>Subscriptions</li>
                </ul>
            </div>

            <hr></hr>

            <div className = "pb-[10%] pt-[8%]">
                <h1 className = "font-bold">You ▾</h1>
                <ul>
                    <li>Your channel</li>
                    <li>History</li>
                    <li>Playlist</li>
                    <li>Your videos</li>
                    <li>Watch later</li>
                    <li>Liked videos</li>
                </ul>
            </div>

            <hr></hr>

            <div className = "pb-[10%] pt-[8%]">
                <h1 className = "font-bold">Subscriptions</h1>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gamming</li>
                    <li>Movies</li>
                </ul>
            </div>

            <hr />

            <div className = "pb-[10%] pt-[8%]">
                <h1 className = "font-bold">Explore</h1>
                <ul>
                    <li>Trending</li>
                    <li>Shopping</li>
                    <li>Music</li>
                    <li>Movies</li>
                    <li>Live</li>
                    <li>Gaming</li>
                    <li>News</li>
                    <li>Sports</li>
                    <li>Courses</li>
                    <li>Fashion & Beauty</li>
                    <li>Podcast</li>
                </ul>
            </div>


        </div>
    )
}

export default Sidebar;