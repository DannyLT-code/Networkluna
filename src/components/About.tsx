import Image from "../assets/image.png"

const About = () => {
    return (
        <div id="about" className="w-full py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Image} alt="/" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#7248f0] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum nesciunt perspiciatis, accusamus ut, praesentium a cumque eum maxime possimus quaerat 
                        molestiae quos molestias quia veritatis, aliquid hic adipisci est harum?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;