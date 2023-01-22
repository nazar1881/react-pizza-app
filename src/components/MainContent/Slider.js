import { useState } from "react";
import s from './MainContent.module.css'

const Slider = ({slides}) => {
    
    const [currentIndex, setCurrentIndex] = useState(0)

    let leftArrow = "<";
    let rightArrow = ">";

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className={s.sliderStyles}>
            <div className={s.sliderLeftArrow} onClick={goToPrevious}>{leftArrow}</div>
            <div className={s.sliderRightArrow} onClick={goToNext}>{rightArrow}</div>
            <div style={{backgroundImage: `url(${slides[currentIndex].img})`}} className={s.sliderItem}></div>
            <div className={s.dotsWrapper}>
                {slides.map((slide, slideIndex) => (
                    <div className={`${s.dotStyles} + ${slideIndex == currentIndex ? `${s.active}` : ''}`} key={slideIndex} onClick={() => goToSlide(slideIndex)}>●</div>
                ))}
            </div>
        </div>
    )
}

export default Slider;