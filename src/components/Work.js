import React from "react";
import Akimera from "../assets/akimera.jpg"
import Tulipanes from "../assets/tulipanes.jpg"
import GymBros from "../assets/gymbros.jpg"
import Ecommerce from "../assets/ecommerce.jpg"

const Work = () => {
    return (
        <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-center text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                    <p className="py-6">// Mis últimos trabajos</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Grid Item */}
                    <div style={{backgroundImage: `url(${GymBros})`}}
                         className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://proyectogymbase.web.app/" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/saintmrti/ProyectoGymBros.git" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${Ecommerce})`}}
                         className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                E-Commerce JS
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://saintmrti.github.io/ProyectoE-Commerce/" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/saintmrti/ProyectoE-Commerce.git" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${Akimera})`}}
                         className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                HTML CSS WEB PAGE
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://akimera.vercel.app/" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/saintmrti/ProyectoAkimera.git" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${Tulipanes})`}}
                         className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                HTML CSS WEB PAGE
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://tulipanesfracc.000webhostapp.com/" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/saintmrti/ProyectoTulipanes.git" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;