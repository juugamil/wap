import React from 'react';
import bgimage from '/assets/bg-1.jpeg';
import Sidecard from './Sidecard';
import logo from '/assets/logo.svg'
import cardinfo from '../data/sidecarddata.js'
import * as te from 'tw-elements';

function Intro () {
return(
<>
    <div className="flex items-center justify-start flex-col text-center mt-0 mb-0 h-screen">
        <div className="absolute h-full w-full pt-0 mt-0 z-0 overflow-hidden">
            <img src={bgimage} class="flex h-full w-full justify-center object-cover"></img>
        </div>
        <div
            className="flex flex-row h-screen w-screen bg-cover bg-opacity-90 bg-white dark:bg-black dark:bg-opacity-80 z-10">
            <div className="flex flex-col flex-start items-start justify-center text-left w-full md:p-20 xs:p-10">

                <div className='grid grid-col-1'>
                    <div className='flex lg:flex-row items-start text-left'><img src={logo}
                            class="flex h-auto w-auto"></img></div>
                    <div className='flex flex-col float-clear'>
                        <p className="text-base md:text-xl mb-3 font-medium text-black">The top sports betting Discord community in the
                            world</p>
                        <p className="text-sm max-w-xl mb-6 font-bold text-red-500 ">Lets get this bread.</p>
                    </div>
                </div>

                <div className='flex flex-row space-x-7 w-full'>
                    <a href='https://discord.gg/UnXdPPupE2'>
                        <button
                            className="flex bg-white hover:bg-gray-700 text-red-500 font-bold py-3 px-6 rounded-full uppercase drop-shadow-md">Free
                            Access</button>
                    </a>
                    <a href='https://mee6.xyz/en/m/1031592196115275796'>
                        <button
                            className="flex bg-red-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full uppercase drop-shadow-md">Premium</button>
                    </a>
                </div>
            </div>

            <div
                className='flex flex-col w-full h-screen lg:flex xs:hidden justify-center overflow-y-scroll snap snap-y snap-mandatory m-0 p-10'>
                <div id="carouselExampleSlidesOnly" class="relative" data-te-carousel-init data-te-carousel-slide>
                    <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                        <div class="relative float-left -mr-[100%] w-full transition-transform duration-[200ms] ease-in-out motion-reduce:transition-none"
                            data-te-carousel-item data-te-carousel-active>
                            <Sidecard
                            imgUrl="/assets/betting-1.svg"
                            header="Free bets daily" 
                            description="A dedicated channel dedicated to free bets on the daily."/>
                        </div>
                        <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[200ms] ease-in-out motion-reduce:transition-none"
                            data-te-carousel-item>
                            <Sidecard
                            imgUrl="/assets/gift.svg"
                            header="Monthly giveaways" 
                            description="Prize and cash giveaways monthly."/>
                        </div>
                        <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[200ms] ease-in-out motion-reduce:transition-none"
                            data-te-carousel-item>
                            <Sidecard
                            imgUrl="/assets/betting-2.svg"
                            header="Loyal, dedicated community" 
                            description="A community of sports bettors and cappers that you can network with."/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default Intro;