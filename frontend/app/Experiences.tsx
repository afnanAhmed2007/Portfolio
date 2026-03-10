import Image from 'next/image';
import imageToAdd from './flywl_logo.jpeg';
import imageToAddTwo from './keeperhr_logo.jpeg';
import imageToAddThree from './images.png'; 
const Experiences = () => {
    return (
        <section id="experiences">
            <div className="flex flex-col items-center gap-20" style={{marginTop: "200px"}}> 
                    <div className="bg-gray-100 gap-6" style={{width: "800px", padding: "28px 32px", height: "275px", boxShadow: "0 10px 12px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb", borderRadius: 16,  background: "linear-gradient(#ffffff, #307050)"}} >
                        <h1 className="text-xl font-medium" style={{fontFamily: 'Inter', height: "15px", display: "flex", justifyContent: "flex-start", alignItems: "center", color: "black"}}>Software Engineer Intern</h1>
                        <h2 style={{fontFamily: 'Inter', height: "15px", marginTop: "10px", marginBottom: "20px", display: "flex", justifyContent: "flex-start", alignItems: "center", color: "black"}}>Flywheel Dynamix</h2>
                        <div className="w-full flex items-center gap-5">
                            <div className="w-[15%]" style={{color: "black"}}>
                                <Image src={imageToAdd} alt="Profile"  height={200} style={{ borderRadius: 10 }}></Image>
                            </div>
                            <div className="w-[75%] flex mx-auto" style={{color: "black"}}>
                                <ul className="font-light" style={{ lineHeight: "1.9", fontFamily: 'Inter' }}>
                                    <li>•   Engineered a unique ID system indexing 70K+ software listings across AWS, GCP, and AZURE</li>
                                    <li>•  Built an LLM-powered normalization pipeline extracting versions and key features from unstructured data</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 gap-6" style={{width: "800px", padding: "28px 32px", height: "275px", boxShadow: "0 10px 12px rgba(0,0,0,0.08)",  border: "1px solid #e5e7eb", borderRadius: 16,  background: "linear-gradient(#ffffff, #701cbf)"}} >
                            <h1  className="text-xl font-medium" style={{fontFamily: 'Inter', height: "15px", display: "flex", justifyContent: "flex-start", alignItems: "center", color: "black"}}>Software Engineer Intern</h1>
                            <h2 style={{fontFamily: 'Inter', height: "15px",  marginTop: "10px", marginBottom: "20px", display: "flex", justifyContent: "flex-start", alignItems: "center", color: "black"}}>KeeperAI</h2>
                            <div className="w-full flex items-center gap-5">
                                <div className="w-[15%]" style={{color: "black"}}>
                                    <Image src={imageToAddTwo} alt="Profile" height={200} style={{ borderRadius: 10 }}></Image>
                                </div>
                                <div className="w-[75%] flex mx-auto" style={{color: "black"}}>
                                    <ul className="font-light" style={{ lineHeight: "1.9", fontFamily: 'Inter' }}> 
                                        <li>•   Built a semantic recommendation system matching similar user profiles with 70% accuracy</li>
                                        <li>•   Processed 800+ user profiles using field-specific queries and Firebase APIs</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                    <div className="bg-gray-100 gap-6" style={{width: "800px", padding: "28px 32px", height: "275px", boxShadow: "0 10px 12px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb", borderRadius: 16,  background: "linear-gradient(#ffffff, #65c2c9)"}} >
                                <h1  className="text-xl font-medium" style={{fontFamily: 'Inter', height: "15px", display: "flex", justifyContent: "flex-start", alignItems: "center", color: "black"}}>Software Engineer Intern</h1>
                                <h2 style={{fontFamily: 'Inter', height: "15px", display: "flex", marginTop: "10px", marginBottom: "20px", justifyContent: "flex-start", alignItems: "center", color: "black"}}>Code Ninjas</h2>
                                <div className="w-full flex items-center gap-5">
                                    <div className="w-[15%] items-center" style={{color: "black"}}>
                                        <Image src={imageToAddThree} alt="Profile" width={100} height={300} style={{ borderRadius: 10 }}></Image>
                                    </div>
                                    <div className="w-[75%]  flex mx-auto" style={{color: "black"}}>
                                        <ul className="font-light" style={{ lineHeight: "1.9", fontFamily: 'Inter' }}> 
                                            <li>• Led STEM coding camps for 12+ students covering robotics, engineering, and programming</li>
                                            <li>• Taught fundamentals of software engineering and web/game development (JavaScript, Python, Unity)</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
            </div>
        </section>
    );
}
export default Experiences;