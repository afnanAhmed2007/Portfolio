"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import imageToAdd from './_1615382342_360_NBA_logo_1a5cfe61c1d3-desktop.jpg';
import imageToAddTwo from './1_go7sTFOGN2fJGgYrI3E-FA.png';
import imageToAddThree from './kind.png'; 
import imageToAddFour from './stock-market-volatility.jpg'; 
import Link from 'next/link';
import { motion } from "motion/react"




export function Projects() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()

    return (
    <section id="projects">
        <div className="flex justify-center"  style={{marginTop: "200px"}}>
            <div className = "flex flex-col items-center gap-10">

                <motion.div initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                    <div className="embla__viewport overflow-hidden w-full max-w-[600px]" ref={emblaRef}>
                            <div className="embla__container">
                                <div className="embla__slide">

                                    <div className="flex flex-col justify-center items-center text-center bg-gray-100 gap-6" style={{height: "600px", borderRadius: 20, background: "linear-gradient(#ffffff, #f4f461)"}} >
                                            <Image src={imageToAddThree} alt="Profile"  width={200} height={200} style={{ borderRadius: 10 }}></Image>
                                            
                                            <div style={{color: "black", fontFamily: 'Inter'}}>
                                                <p className="text-xl font-medium">R U KIND</p>
                                            </div>

                                            <div className="font-light" style={{color: "black", width: "400px", fontFamily: 'Inter'}}>
                                                <p>Developed a full-stack web platform that allows users to share and celebrate real-world good deeds through video, featuring an AI pipeline that uses Gemini for video understanding and Groq for semantic comparison.</p>
                                            </div>

                                            <Link href='https://github.com/afnanAhmed2007/UHACCS'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="black" viewBox="0 0 16 16">
                                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                                                </svg>
                                            </Link>
                                    </div>

                                </div>

                                <div className="embla__slide">

                                    <div className="flex flex-col justify-center items-center text-center bg-gray-100 gap-6" style={{height: "600px", borderRadius: 20,  background: "linear-gradient(#ffffff, #f2875c)"}} >
                                                <Image src={imageToAddFour} alt="Profile"  width={200} height={200} style={{ borderRadius: 10 }}></Image>
                                                <div style={{color: "black", fontFamily: 'Inter'}}>
                                                    <p className="text-xl font-medium">Stock Volatility Analyzer</p>
                                                </div>

                                                <div className="font-light" style={{color: "black", width: "400px", fontFamily: 'Inter'}}>
                                                    <p>Engineered a volatility analysis tool processing 310K+ simulated price paths across 62 tickers, combining multiple volatility metrics into a weighted composite score.</p>
                                                </div>

                                                <Link href='https://github.com/afnanAhmed2007/Stock-Volatility-Analyzer-QF-'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="black" viewBox="0 0 16 16">
                                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                                                </svg>
                                            </Link>
                                    </div>

                                </div>
                                <div className="embla__slide">

                                    <div className="flex flex-col justify-center items-center text-center bg-gray-100 gap-6" style={{height: "600px", borderRadius: 20, background: "linear-gradient(#ffffff, #8690f1)"}} >
                                            <Image src={imageToAddTwo} alt="Profile"  width={200} height={200} style={{ borderRadius: 10 }}></Image>
                                                <div style={{color: "black", fontFamily: 'Inter'}}>
                                                    <p className="text-xl font-medium">CloudScraper</p>
                                                </div>

                                                <div className="font-light" style={{color: "black", width: "400px", fontFamily: 'Inter'}}>
                                                    <p>Created a web-scraping pipeline with BeautifulSoup to aggregate software listings across cloud platforms, using a weighted matching algorithm and concurrency to improve accuracy and reduce runtime by 60%.</p>
                                                </div>

                                                <Link href='https://github.com/afnanAhmed2007/Flywyl-Marketplace-Scraper'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="black" viewBox="0 0 16 16">
                                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                                                </svg>
                                                </Link>
                                    </div>

                                </div>

                                <div className="embla__slide">

                                    <div className="flex flex-col justify-center items-center text-center bg-gray-100 gap-6" style={{height: "600px", borderRadius: 20, background: "linear-gradient(#ffffff, #86f196)"}} >
                                                <Image src={imageToAdd} alt="Profile"  width={200} height={200} style={{ borderRadius: 10 }}></Image>
                                                <div style={{color: "black", fontFamily: 'Inter'}}>
                                                    <p className="text-xl font-medium">NBAPredict</p>
                                                </div>

                                                <div className="font-light" style={{color: "black", width: "400px", fontFamily: 'Inter'}}>
                                                    <p>Created a RandomForest model trained on 17K+ game logs with engineered rolling metrics and 85% precision, paired with a Streamlit UI for interactive scenario analysis.</p>
                                                </div>

                                                <Link href='https://github.com/afnanAhmed2007/NBAPredict'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="black" viewBox="0 0 16 16">
                                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                                                </svg>
                                                </Link>
                                    </div>

                            </div>
                        </div>
                </div>

                </motion.div>

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