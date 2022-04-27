import React, { useEffect } from "react";
import {auth} from "../../firebase";

function Home() {
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
            }
          })
    },[])
    return (
        <div className="py-10 h-screen bg-gray-300 px-2">
    <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
            <div className="w-full p-4">
                <div className="relative"> <input type="text" className="w-full h-12 rounded focus:outline-none px-3 focus:shadow-md" placeholder="Search..."/>  </div>
                <ul>
                    <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div className="flex ml-2">
                            <div className="flex flex-col ml-2"> <span className="font-medium text-black">Jessica Koel</span> <span className="text-sm text-gray-400 truncate w-32">Hey, Joel, I here to help you out please tell me</span> </div>
                        </div>
                        <div className="flex flex-col items-center"> <span className="text-gray-300">11:26</span> </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    )
}

export default Home