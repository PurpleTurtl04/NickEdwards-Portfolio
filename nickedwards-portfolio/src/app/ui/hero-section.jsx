import Image from 'next/image';
import HeroImage from '../../../public/HeroImage.png';

function HeroSection() {
    return (
        <div className='hero bg-base-200 min-h-screen'>
            <div className='hero-content flex-col lg:flex-row-reverse'>
                <div className='max-w-3xl'>
                    <Image
                        src={HeroImage}
                        alt='Man holding a baby'
                        width={905}
                        height={912}
                    />
                </div>
                <div className='text-center lg:text-left'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl'>
                        Hello I&apos;m
                    </h2>
                    <h1 className='text-6xl md:text-7xl lg:text-8xl font-bold text-primary lg:ml-5 pt-3'>
                        Nick
                    </h1>
                    <h3 className='text-lg md:text-xl lg:text-2xl pt-3 max-w-83 md:max-w-sm lg:max-w-lg'>
                        A Full-Stack Web
                        <span className='font-bold text-secondary/80'>
                            {' '}
                            Developer{' '}
                        </span>
                        &
                        <span className='font-bold text-accent/80'>
                            {' '}
                            Designer{' '}
                        </span>
                        with an analytical background
                    </h3>
                    <div className='flex gap-2 pt-6 justify-center lg:justify-start'>
                        <button className='btn btn-primary'>
                            Got a Project?
                        </button>
                        <button className='btn btn-outline btn-primary'>
                            My Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
