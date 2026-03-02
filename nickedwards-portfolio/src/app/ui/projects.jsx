import Image from 'next/image';

import Accent2 from '../../../public/Accent2.png';
import Beckaroo from '../../../public/Beckaroo.png';

function Projects() {
    return (
        <div className='container mx-auto my-15 px-6'>
            <div className='flex flex-col items-center'>
                <h2 className='text-center text-3xl lg:text-4xl'>Projects</h2>
                <Image
                    src={Accent2}
                    width={10}
                    height={75}
                    alt='A lines with a cicle'
                    className='scale-75'
                />
            </div>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'></div>
        </div>
    );
}

export default Projects;
