import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '../../../Style.css'
import slide1 from '../../../assets/home/01.jpg'
import slide2 from '../../../assets/home/02.jpg'
import slide3 from '../../../assets/home/03.png'
import slide4 from '../../../assets/home/04.jpg'
import slide5 from '../../../assets/home/05.png'


const Slider = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 1000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider h-96 ">
                <div className="keen-slider__slide number-slide1"> <img src={slide1}></img></div>  
                <div className="keen-slider__slide number-slide1"> <img src={slide2}></img></div>  
                <div className="keen-slider__slide number-slide1"> <img src={slide3}></img></div>  
                <div className="keen-slider__slide number-slide1"> <img src={slide4}></img></div>  
                <div className="keen-slider__slide number-slide1"> <img src={slide5}></img></div>  
            </div>
        </>
    );
};

export default Slider;