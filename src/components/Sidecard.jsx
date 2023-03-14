import React from 'react';

function Sidecard ( { imgUrl, header, description } ) {
    return(
        <div className="flex items-center justify-start flex-col w-full h-full">
        <div className='flex flex-row'>
            <img src={imgUrl} class="flex h-full w-50 justify-start"></img>
        </div>
            <h2 className="lg:text-4xl md:text-3xl mb1 md:mb-3 font-bold items uppercase text-red-500 ">{header}</h2>
            <p className="text-base md:text-xl mb-3 font-medium text-black">{description}</p>
        </div>
    )
}

export default Sidecard;