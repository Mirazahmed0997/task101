import React from 'react';
import img from '../../../assets/contact/banner.jpg'
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { CiDeliveryTruck } from 'react-icons/ci';


const About = () => {
    return (
        <div>
            <div className="hero bg-base-200  p-16">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={img}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='md:p-6 md:ms-16'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className='flex items-center'>
                            <button className="btn btn-primary m-6 bg-orange-400">About More</button>
                            <div>
                                <span className='flex gap-2 items-center'><FaPhoneAlt></FaPhoneAlt> +015***********</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" bg-base-200 flex flex-col w-full items-center  p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <ul className="flex flex-col divide-y dark:divide-gray-300">
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex items-center w-full space-x-2 sm:space-x-4">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://t4.ftcdn.net/jpg/01/30/64/81/360_F_130648163_zLEs0gxg4j7tGDV8PQqxzjeJmiIF4tFu.jpg" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">Fast Delivery</h3>
                                        <p className="text-sm dark:text-gray-600">Within 30 Minitues</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="flex items-center w-full space-x-2 sm:space-x-4">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://img.freepik.com/premium-vector/yellow-trendy-star-icon-white-background-isolated-vector-illustration_34480-1310.jpg?semt=ais_hybrid" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">Absulate Demand</h3>
                                        <p className="text-sm dark:text-gray-600">Within 30 Minitues</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="flex items-center w-full space-x-2 sm:space-x-4">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5GT8_fQuL0R1UiyGsZTAOUWiNXG3JD5q0jg&s" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">Pickup & Delivery</h3>
                                        <p className="text-sm dark:text-gray-600">Within 30 Minitues</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </li>
                </ul>

            </div>

        </div>
    );
};

export default About;