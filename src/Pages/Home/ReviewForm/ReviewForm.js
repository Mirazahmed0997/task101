import React from 'react';
import bgImg from '../../../assets/home/SPOON2.webp'
import SharedTile from '../SharedTilte/SharedTile';

const ReviewForm = () => {
    return (
        <div className="hero h-96 p-6 my-6 bg-red-700 bg-opacity-50 text-white font-extrabold"
            style={{
                backgroundImage: `url('${bgImg}')`,
            }}>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <SharedTile title='book your table' subTitle='Right Now'></SharedTile>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">First name</label>
                                <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Last name</label>
                                <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>

                        </div>



                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default ReviewForm;