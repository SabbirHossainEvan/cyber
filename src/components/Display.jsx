import React from 'react';
import playStation from '../assets/PlayStation.png';
import headPhone from '../assets/hero__gnfk5g59t0qe_xlarge_2x 1@2x.png';
import game from '../assets/image 36.png';
import macBook from '../assets/MacBook Pro 14.png';

const Display = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* display right */}
            <div className='grid-cols-6'>
                <div className='flex justify-between align-middle'>
                    <div>
                        <img src={playStation} alt="PlayStation" className='w-40 md:w-60 lg:w-80' />
                    </div>
                    <div>
                        <h2>Playstation 5</h2>
                        <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='flex justify-between align-middle'>
                        <div>
                            <img src={headPhone} alt="HeadPhone" className='w-40 md:w-60 lg:w-80' />
                        </div>
                        <div>
                            <h3>Apple AirPods<span>Max</span></h3>
                            <p>Computational audio. Listen, it's powerful</p>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img src={game} alt="Game" className='w-40 md:w-60 lg:w-80' />
                        </div>
                        <div>
                            <h3>Apple Vision<span>Pro</span></h3>
                            <p>An immersive way to experience entertainment</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* display left */}
            <div className='grid-cols-6'>
                <div>
                    
                </div>
            </div>

        </div>
    );
};

export default Display;