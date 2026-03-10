"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import imageToAdd from './_1615382342_360_NBA_logo_1a5cfe61c1d3-desktop.jpg';
import imageToAddTwo from './1_go7sTFOGN2fJGgYrI3E-FA.png';
import imageToAddThree from './kind.png'; 
import imageToAddFour from './stock.png'; 




export function Projects() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()

    return (
    <section id="projects">
        <div className="flex justify-center"  style={{marginTop: "200px"}}>
            <div className = "flex flex-col items-center gap-10">
                <div className="embla__viewport overflow-hidden w-full max-w-[600px]" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide">

                            <div className="flex flex-col justify-center items-center bg-gray-100 gap-6" style={{height: "600px", borderRadius: 20, background: "linear-gradient(#ffffff, #f4f461)"}} >
                                    <Image src={imageToAddThree} alt="Profile"  width={200} height={200} style={{ borderRadius: 10 }}></Image>
                                    
                                    <div style={{color: "black", fontFamily: 'Inter'}}>
                                        <p className="text-xl font-medium">R U KIND</p>
                                    </div>

                                    <div className="font-light" style={{color: "black", width: "400px", fontFamily: 'Inter'}}>
                                        <p>Developed a full-stack web platform that allows users to share and celebrate real-world good deeds through video, featuring an AI pipeline that uses Gemini for video understanding and Groq for semantic comparison.</p>
                                    </div>
                            </div>

                        </div>

                        <div className="embla__slide">

                            <div className="flex flex-col justify-center items-center bg-gray-100 gap-6" style={{height: "600px", borderRadius: 20,  background: "linear-gradient(#ffffff, #f2875c)"}} >
                                        <Image src={imageToAddFour} alt="Profile"  width={200} height={200} style={{ borderRadius: 10 }}></Image>
                                        <div style={{color: "black", fontFamily: 'Inter'}}>
                                            <p className="text-xl font-medium">Stock Volatility Analyzer</p>
                                        </div>

                                        <div className="font-light" style={{color: "black", width: "400px", fontFamily: 'Inter'}}>
                                            <p>Engineered a volatility analysis tool processing 310K+ simulated price paths across 62 tickers, combining multiple volatility metrics into a weighted composite score.</p>
                                        </div>
                            </div>

                        </div>
                        <div className="embla__slide">

                            <div className="flex flex-col justify-center items-center bg-gray-100 gap-6" style={{height: "600px", borderRadius: 20, background: "linear-gradient(#ffffff, #8690f1)"}} >
                                    <Image src={imageToAddTwo} alt="Profile"  width={200} height={200} style={{ borderRadius: 10 }}></Image>
                                        <div style={{color: "black", fontFamily: 'Inter'}}>
                                            <p className="text-xl font-medium">CloudScraper</p>
                                        </div>

                                        <div className="font-light" style={{color: "black", fontFamily: 'Inter'}}>
                                            <p>Created a web-scraping pipeline with BeautifulSoup to aggregate software listings across cloud platforms, using a weighted matching algorithm and concurrency to improve accuracy and reduce runtime by 60%.</p>
                                        </div>
                            </div>

                        </div>

                        <div className="embla__slide">

                            <div className="flex flex-col justify-center items-center bg-gray-100 gap-6" style={{height: "600px", borderRadius: 20, background: "linear-gradient(#ffffff, #86f196)"}} >
                                        <Image src={imageToAdd} alt="Profile"  width={200} height={200} style={{ borderRadius: 10 }}></Image>
                                        <div style={{color: "black", fontFamily: 'Inter'}}>
                                            <p className="text-xl font-medium">NBAPredict</p>
                                        </div>

                                        <div className="font-light" style={{color: "black", fontFamily: 'Inter'}}>
                                            <p>Created a RandomForest model trained on 17K+ game logs with engineered rolling metrics and 85% precision, paired with a Streamlit UI for interactive scenario analysis.</p>
                                        </div>
                            </div>

                        </div>
                </div>
            </div>

                <div className="embla flex flex-row items-center gap-100" >
                    <button className="embla__prev" style={{color: "white"}} onClick={goToPrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Back
                    </button>
                    <button className="embla__next" style={{color: "white"}} onClick={goToNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        Next
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}