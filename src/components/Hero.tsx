import Typewriter from 'typewriter-effect'

const Hero = () => {
    return (
        <div>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#7248f0] md:text-4xl sm:text-3xl text-2xl font-bold p-2">Hi, my name is Danny.</p>
                <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">Welcome to my website!</h1>
                <div className="flex justify-center items-center md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2">
                    <p className="pr-3 py-4">I am a:</p>
                   <Typewriter
                    options={{
                        strings: ['CS major', 'BI Developer', 'Web developer','Problem solver', 'Fast learner', 'Gaming legend'],
                        delay: 75,
                        autoStart: true,
                        loop: true,
                    }}
                   />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-400">Full-stack developer with a passion for learning & creating.</p>
                <button className="bg-[#7248f0] w-[200px] rounded-md font-medium my-6 mx-auto py-3">View my work</button>
            </div>
        </div>
    )
}

export default Hero;