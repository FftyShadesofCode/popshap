import React, { useState, useEffect, useRef } from 'react'
import Slide1 from '../assets/slide1.mp4'
import Slide2 from '../assets/slide2.jpg'

import './Slides.css'

const slides = [
    `${Slide1}`, `${Slide2}`
]

const delay = 2500

export default function Slideshow() {
    const [ index, setIndex ] = useState(0)
    const timeoutRef = useRef(null)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() =>
                setIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 :
                        prevIndex + 1),
            delay
        )
        return () => {
            resetTimeout()
        }
    }, [index])

    return (
        <div className='slideshow'>
            <div className='slideshowSlider' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
                    {slides.map((slide, index) => (
                        <div className='slide' key={index} />
                    ))}
            </div>
        </div>
    );
};