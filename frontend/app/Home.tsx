"use client"
import Image from 'next/image';
import imageToAdd from './IMG_5901.jpg';
import { motion } from "motion/react"

const Home = () => {
    return (
        <section id = "about">
            <div className="flex justify-center " style={{marginTop: "200px"}} >
                <div className="flex items-center max-w-[900px] gap-8">
                    <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>

                        <Image src={imageToAdd} alt="Profile" width={400} height={400} style={{ borderRadius: 10 }}></Image>
                    </motion.div>

                    <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                        <div className="text-xl" style={{width: 550, color: "black"}}>
                            <p style={{fontFamily: 'Inter'}}>Hello 👋</p>
                            <p style={{fontFamily: 'Inter'}}>I'm Afnan, and I am currently a sophomore at Rutgers University, majoring in computer science 🖥️. Other than doing fun side projects, I really like to cook and bake sweet treats 🍪, watch hours of anime, and play ping pong 🏓. Coding wise, my favorite language is python because I love the syntax, and I am a backend developer. Anyways, I hope you enjoy looking at my portfolio 🙃! </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
export default Home;