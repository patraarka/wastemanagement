import AutoImageCarousel from "./AutoImageCaraousel";

const Home=()=>{
    return(
        <>
            <div style={{
                backgroundImage: "url(src/assets/img2.png)"
                }} className='h-125 w-full bg-cover bg-center'>
                <div className='bg-black/50 h-full w-full'>
                <nav className='flex justify-between p-5'>
                    <div className='flex'>
                    <div><img alt="logo" src="src/assets/logo.png" h={100} w={100} className="h-17 w-17"/>
                    </div>
                    <div>
                        <p className='text-3xl text-blue-500 font-bold py-0 my-0'>WASTE</p>
                        <p className='text-xl text-white py-0 my-0'>MAN</p>
                    </div>
                    </div>
                    <div>
                    <ul className='flex text-white gap-x-10 px-20 py-5'>
                        <li className='hover:underline decoration-blue-500 decoration-2 hover:decoration-4'>HOME</li>
                        <li className='hover:underline decoration-blue-500 decoration-2 hover:decoration-4'>ABOUT</li>
                        <li className='hover:underline decoration-blue-500 decoration-2 hover:decoration-4'>PRICING</li>
                        <li className='hover:underline decoration-blue-500 decoration-2 hover:decoration-4'>CONTACT US</li>
                    </ul>
                    </div>
                </nav>
                <div className="flex justify-between">
                    <div className='text-white font-light text-left mx-20 py-20'>
                    <p  className='text-5xl'>
                        You Point It
                    </p>
                    <p  className='text-blue-500 text-7xl font-bold'>
                        We Clean It
                    </p>
                    <p>
                        <b className="text-blue-500">Today</b>, the world buys water.
                        <br/>
                        <b className="text-blue-500">Tomorrow</b>, it shall pay to clean the environment.
                    </p>
                    </div>
                    <div className='relative mx-25 h-80 w-80 overflow-hidden runded-lg'>
                    <AutoImageCarousel/>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Home;
