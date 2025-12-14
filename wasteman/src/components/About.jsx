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
                <p className="py-7 text-4xl font-bold text-blue-500 text-center">
                    What Our Model Does
                </p>
                <p className="text-white text-center text-sm">
                    The Model takes into account the images of the waste materials
                    one by one
                    <br/>and then it classifies the items.
                    The items are classified into one of the 
                    <br/>Six following categories respectively:
                    <br/>
                    <b className="text-blue-500 font-bold text-xl">Paper, Glass, Metal, Plastic, Organic, Textile</b>
                </p>
                <div className="grid grid-rows-2 grid-cols-3 px-5 place-items-center">
                    <div className="bg-white h-50 w-85 rounded-3xl p-2 m-5 flex items-center">
                        <img alt="paper" src="src/assets/aboutimg1.png" h={100} w={100} className="h-50 w-50 object-fit"/>
                        <p className="text-xs font-light">
                            <b className="text-blue-500 text-sm font-bold">Paper</b><br/>
                            A major obstacle is the mixing of 
                            non-paper items with recyclable 
                            paper, which degrades the quality of the 
                            entire batch.</p>
                    </div>
                    <div className="bg-white h-50 w-85 rounded-3xl p-2 m-5 flex items-center">
                        <img alt="glass" src="src/assets/aboutimg2.png" h={100} w={100} className="h-50 w-50 object-fit"/>
                        <p className="text-xs font-light">
                            <b className="text-blue-500 text-sm font-bold">Glass</b><br/>
                            A lack of public understanding about 
                            what types of glass are recyclable 
                            which contributes 
                            significantly to contamination rates. 
                            </p>
                    </div>
                    <div className="bg-white h-50 w-85 rounded-3xl p-2 m-5 flex items-center">
                        <img alt="metal" src="src/assets/aboutimg3.png" h={100} w={100} className="h-50 w-50 object-fit px-2"/>
                        <p className="text-xs font-light">
                            <b className="text-blue-500 text-sm font-bold">Metal</b><br/>
                            Workers in metal waste handling facilities 
                            face exposure to toxic substances 
                            and physical hazards from heavy machinery.</p>
                    </div>
                    <div className="bg-white h-50 w-85 rounded-3xl p-2 m-5 flex items-center">
                        <img alt="plastic" src="src/assets/aboutimg4.png" h={100} w={100} className="h-50 w-50 object-fit"/>
                        <p className="text-xs font-light">
                            <b className="text-blue-500 text-sm font-bold">Plastic</b><br/>
                            Different plastic types (PET, HDPE, etc.) 
                            have unique properties, and multi-layered or 
                            contaminated items are difficult 
                            to sort and recycle efficiently.</p>
                    </div>
                    <div className="bg-white h-50 w-85 rounded-3xl p-2 m-5 flex items-center">
                        <img alt="organic" src="src/assets/aboutimg5.png" h={100} w={100} className="h-50 w-50 object-fit"/>
                        <p className="text-xs font-light">
                            <b className="text-blue-500 text-sm font-bold">Organic</b><br/>
                            Decomposing organic waste naturally produces 
                            unpleasant odors (such as hydrogen sulfide and ammonia)
                            and attracts pests like flies and rodents.</p>
                    </div>
                    <div className="bg-white h-50 w-85 rounded-3xl p-2 m-5 flex items-center">
                        <img alt="textile" src="src/assets/aboutimg6.png" h={100} w={100} className="h-50 w-50 object-fit"/>
                        <p className="text-xs font-light">
                            <b className="text-blue-500 text-sm font-bold">Textile</b><br/>
                            Most modern clothing is made from 
                            blended fibers (e.g., cotton and polyester) which are 
                            extremely difficult to separate using current technology.</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default About;