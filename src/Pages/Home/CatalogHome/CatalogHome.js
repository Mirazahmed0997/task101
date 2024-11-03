import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import SharedTile from '../SharedTilte/SharedTile';


const CatalogHome = () => {

    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular');
                setMenu(popularItem)
            }
            )
    })

    return (
        <div className='p-6'>
            <SharedTile title='Popular Food Items' subTitle='Chech It Out'></SharedTile>

            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                slidesPerGroupSkip={4}
                grabCursor={true}
                keyboard={{
                enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                }}
                Scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >

                <div>
                    {
                        menu.map(item =>
                            <SwiperSlide className='m-2'>
                                <div className="card bg-base-100 w-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src={item.image}
                                            alt="Shoes"
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{item.name}</h2>
                                        <p>{item.recipe.slice(0,40)}...</p>
                                       
                                    </div>
                                </div>
                            </SwiperSlide>

                        )
                    }
                </div>

            </Swiper>
        </div>
    );
};

export default CatalogHome;