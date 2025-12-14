import React from "react";

const About=()=>{
    return(
        <>
            <div style={{
                backgroundImage: "url(src/assets/img1.png)"
                }} className='h-250 w-full bg-cover bg-center'>
                <div className="bg-black/45 w-full h-full py-10">
                <p className="text-center text-white text-3xl py-5">
                    <b className="text-5xl text-blue-500">The Three R's:</b>
                    <br/>
                Because There Is No Planet B</p>
                <div className="flex justify-around mx-20 px-20">
                    <div className="bg-white w-75 h-40 rounded-3xl py-5 mx-5">
                        <p className="text-xl text-blue-500 font-bold px-5">Reduce</p>
                        <p className="px-5 text-sm font-extralight text-left overflow:hidden text-overflow:ellipsis">This step focuses on cutting 
                            back on the amount of 
                            materials consumed and waste generated in the first place.</p>
                    </div>
                    <div className="bg-white w-75 h-40 rounded-3xl py-5 mx-5">
                        <p className="text-xl text-blue-500 font-bold px-5">Reuse</p>
                        <p className="px-5 text-sm font-extralight text-left overflow:hidden text-overflow:ellipsis">Reuse involves using an item 
                            multiple times for its original purpose 
                            or finding a new, alternative use for it.</p>            
                    </div>
                    <div className="bg-white w-75 h-40 rounded-3xl py-5 mx-5">
                        <p className="text-xl text-blue-500 font-bold px-5">Recycle</p>
                        <p className="px-5 text-sm font-extralight text-left overflow:hidden text-overflow:ellipsis">This is the final and least effective step 
                            in the hierarchy, applied when reducing and 
                            reusing are no longer viable options.</p>
                    </div>                    
                </div>
                <p className="py-5 text-4xl font-bold text-white text-center">
                    What Our Model Does
                </p>
                <p>
                </p>
                <div className="grid grid-rows-2 grid-cols-3 px-10">
                    <div className="bg-white h-50 w-50 rounded-3xl p-2 m-5">
                        <img alt="paper" src="src/assets/aboutimg1.png" h={100} w={100} className="h-50 w-50 bg-cover"/>
                    </div>
                    <div className="bg-white h-50 w-50 rounded-3xl p-2 m-5">
                        <img alt="glass" src="src/assets/aboutimg2.png" h={100} w={100} className="h-50 w-50 bg-cover"/>
                    </div>
                    <div className="bg-white h-50 w-50 rounded-3xl p-2 m-5">
                        <img alt="metal" src="src/assets/aboutimg3.png" h={100} w={100} className="h-50 w-50 bg-cover"/>
                    </div>
                    <div className="bg-white h-50 w-50 rounded-3xl p-2 m-5">
                        <img alt="plastic" src="src/assets/aboutimg4.png" h={100} w={100} className="h-50 w-50 bg-cover"/>
                    </div>
                    <div className="bg-white h-50 w-50 rounded-3xl p-2 m-5">
                        <img alt="organic" src="src/assets/aboutimg5.png" h={100} w={100} className="h-50 w-50 aspect-square object-fit"/>
                    </div>
                    <div className="bg-white h-50 w-50 rounded-3xl p-2 m-5">
                        <img alt="textile" src="src/assets/aboutimg6.png" h={100} w={100} className="h-50 w-50 bg-cover"/>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default About;