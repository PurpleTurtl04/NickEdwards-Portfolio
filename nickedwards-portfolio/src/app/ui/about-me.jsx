import Image from 'next/image';

import Accent from '../../../public/Accent.png';
import Eight from '../../../public/Eight.svg';
import Dev from '../../../public/Dev.svg';
import Design from '../../../public/Design.svg';

function AboutMe() {
    return (
        <div className='container mx-auto my-15 grid grid-cols-1 items-center justify-center gap-6 lg:grid-cols-2'>
            <div className='flex flex-col items-center lg:order-2'>
                <h2 className='text-center text-3xl lg:text-4xl'>About Me</h2>
                <p className='max-w-lg text-justify lg:text-left'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non nisi eget ipsum lacinia varius et maximus magna.
                    Sed hendrerit purus imperdiet elementum condimentum. Mauris
                    cursus sagittis iaculis. Aenean id magna non ipsum aliquet
                    luctus. Maecenas porta sollicitudin mauris quis cursus.
                    Vivamus rutrum pharetra dignissim. Nunc dignissim sapien non
                    eros egestas, sed dignissim est lacinia. Fusce rutrum ligula
                    sed eros vestibulum, efficitur pulvinar risus posuere.{' '}
                </p>
            </div>
            <div className='flex justify-center gap-4'>
                <div>
                    <Image
                        src={Accent}
                        width={10}
                        height={355}
                        alt='Three lines spaced with two circles inbetween them'
                        className='hidden scale-75 lg:block'
                    />
                </div>
                <div className='flex flex-col justify-center gap-6 md:flex-row lg:order-1 lg:flex-col'>
                    <div className='flex flex-col-reverse items-center justify-center gap-2 lg:flex-row lg:justify-start lg:gap-4'>
                        <Image
                            src={Eight}
                            width={75}
                            height={75}
                            alt='The number eight inside a square'
                            className='max-w-15'
                        />
                        <p>8+ Years of Experience</p>
                    </div>
                    <div className='flex flex-col-reverse items-center justify-center gap-2 lg:flex-row lg:justify-start lg:gap-4'>
                        <Image
                            src={Dev}
                            width={75}
                            height={75}
                            alt='Angle brackets in a square'
                            className='max-w-15'
                        />
                        <p>Web/Software Development</p>
                    </div>
                    <div className='flex flex-col-reverse items-center justify-center gap-2 lg:flex-row lg:justify-start lg:gap-4'>
                        <Image
                            src={Design}
                            width={75}
                            height={75}
                            alt='A pencil and ruler making an X'
                            className='max-w-15'
                        />
                        <p>Web Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
