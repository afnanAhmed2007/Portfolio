import Image from 'next/image';
import imageToAdd from './profile.jpg';

const Home = () => {
    return (
        <section id = "Home">
            <div className="flex justify-center items-center" style={{marginTop: "200px"}} >
                <div className="w-[30%]">
                    <Image src={imageToAdd} alt="Profile" width={200} height={100} style={{ borderRadius: 10 }}></Image>
                </div>
                <div className="w-[30%]" style={{color: "black"}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
            </div>
        </section>
    );
}
export default Home;