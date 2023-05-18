import React, { useState, useEffect } from 'react';
import { ReactComponent as Previous } from '../../img/previous.svg';
import { ReactComponent as Next } from '../../img/next.svg';

import './carousel.scss';

const IllustrationCard = (props) => {
    let images = props.images;
    const left = "ArrowLeft", right = "ArrowRight";
    const d = document;
    const section = "illustrations";
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
        const listener = () => {
            const position = d.querySelector(`.${section}`).getBoundingClientRect().top;
            const isOn = position >= -100 && position <= 200;
            if(!isOn && activeImageIndex !== 0){
                MoveCarousel(0);
            }
        };

        d.addEventListener('scroll', listener);
        return () => {
            d.removeEventListener('scroll', listener);
        }
    })

    useEffect(() => {
        let timer = null, timer2 = null;
        const handleKeyDown = (e) => {
            if (carouselIsReady) {
                if(e.key === left || e.key === right){
                    if (e.key === left) {
                        setCarouselIsReady(false);
                        HandlePrevious();
                    } else if (e.key === right) {
                        setCarouselIsReady(false);
                        HandleNext();
                    }
                    const toAnimate = `.carousel-button.${e.key.toLowerCase()}`;
                    document.querySelector(toAnimate).classList.add('active');
                    timer = setTimeout(() => { setCarouselIsReady(true) }, 300);
                    timer2 = setTimeout(() => { document.querySelector(toAnimate).classList.remove('active') }, 100);
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            clearTimeout(timer);
            clearTimeout(timer2);
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
            <button className="btn carousel-button left arrowleft" onClick={(e) => HandlePrevious()}><Previous /></button>
            <button className="btn carousel-button right arrowright" onClick={(e) => HandleNext()}><Next /></button>
            {/* <div className="carousel-description">
                <h1 className="title">{images[activeImageIndex].title}</h1>
                <p>{images[activeImageIndex].desc}</p>
            </div> */}
        </div>
    );

}

export default IllustrationCard;