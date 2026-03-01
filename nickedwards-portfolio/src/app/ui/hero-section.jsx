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
                    <h1 className='text-primary pt-3 text-6xl font-bold md:text-7xl lg:ml-5 lg:text-8xl'>
                        Nick
                    </h1>
                    <h3 className='max-w-83 pt-3 text-lg md:max-w-sm md:text-xl lg:max-w-lg lg:text-2xl'>
                        A Full-Stack Web
                        <span className='text-secondary/80 font-bold'>
                            {' '}
                            Developer{' '}
                        </span>
                        &
                        <span className='text-accent/80 font-bold'>
                            {' '}
                            Designer{' '}
                        </span>
                        with an analytical background
                    </h3>
                    <div className='flex justify-center gap-2 pt-6 lg:justify-start'>
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
