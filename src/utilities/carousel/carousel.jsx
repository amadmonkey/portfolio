import React, { useState, useEffect } from 'react';
import './carousel.scss';
import { ReactComponent as Previous } from '../../img/previous.svg';
import { ReactComponent as Next } from '../../img/next.svg';

function IllustrationCard(props) {
    let images = props.images;
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [carouselIsReady, setCarouselIsReady] = useState(true);
    const [activeIndex, setActiveIndex] = useState({
        tertiary1: (images.length - 2),
        secondary1: (images.length - 1),
        primary: 0,
        secondary2: 1,
        tertiary2: 2
    });

    const AssignImages = () => {
        images.forEach((value, index) => { value.position = "" })
        images[activeIndex.tertiary1].position = "carousel-tertiary carousel-tertiary-left";
        images[activeIndex.secondary1].position = "carousel-secondary carousel-secondary-left";
        images[activeIndex.primary].position = "carousel-primary";
        images[activeIndex.secondary2].position = "carousel-secondary carousel-secondary-right";
        images[activeIndex.tertiary2].position = "carousel-tertiary carousel-tertiary-right";
    }

    AssignImages();

    const HandlePrevious = () => {
        let n = (activeImageIndex - 1) < 0 ? (images.length - 1) : (activeImageIndex - 1);
        MoveCarousel(n);
    }

    const HandleNext = () => {
        let n = (activeImageIndex + 1) >= images.length ? 0 : (activeImageIndex + 1);
        MoveCarousel(n);
    }

    const MoveCarousel = (n) => {
        setActiveIndex({
            tertiary1: (n - 2) < 0 ? ((images.length) - Math.abs(n - 2)) : Math.abs(n - 2),
            secondary1: (n - 1) < 0 ? ((images.length) - Math.abs(n - 1)) : Math.abs(n - 1),
            primary: n,
            secondary2: (n + 1) >= (images.length) ? 0 : (n + 1),
            tertiary2: (n + 2) >= (images.length) ? ((n + 2) - (images.length)) : (n + 2)
        });
        setActiveImageIndex(n);

    }


    useEffect(() => {
        let timer = null;
        const handleKeyDown = (e) => {
            if (carouselIsReady) {
                // if (top >= -400 && top <= 500) {
                if (e.key === "ArrowLeft") { // 
                    setCarouselIsReady(false);
                    HandlePrevious();
                } else if (e.key === "ArrowRight") { // 
                    setCarouselIsReady(false);
                    HandleNext();
                }
                timer = setTimeout(() => { setCarouselIsReady(true) }, 180);
                // } else {
                //     timer = setTimeout(() => { setCarouselIsReady(true) }, 180);
                // }
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            clearTimeout(timer);
        }
    })

    return (
        <div className={`carousel-container ${images[activeImageIndex].isPortrait ? 'container-is-portrait' : 'container-is-landscape'}`}>
            <div className="carousel-images">
                {images.map((value, index) => {
                    return (
                        <div className={`carousel-item ${value.position ? value.position : ``} ${value.isPortrait ? "portrait" : "landscape"}`} style={{ backgroundColor: value.dominantColor ? value.dominantColor : '#fff' }} key={index}>
                            <img loading="lazy" src={value.path.md} key={index} alt={value.title} />
                            <div className="carousel-item-lip">
                                <a href={value.path.lg} target="_blank" rel="noopener noreferrer">See full image</a>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className="carousel-button left" onClick={(e) => HandlePrevious()}><Previous /></button>
            <button className="carousel-button right" onClick={(e) => HandleNext()}><Next /></button>
            <div className="carousel-description">
                <h1 className="title">{images[activeImageIndex].title}</h1>
                <p>{images[activeImageIndex].desc}</p>
            </div>
        </div>
    );

}

export default IllustrationCard;