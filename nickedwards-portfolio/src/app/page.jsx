import Image from 'next/image';

export default function Home() {
    return (
        <>
            <div className='navbar bg-base-100 shadow-sm'>
                <div className='flex-1'>
                    <a className='btn btn-ghost text-xl'>Nick Edwards</a>
                </div>
                <div className='flex-none'>
                    <ul className='menu menu-horizontal px-1'>
                        <li>
                            <a>About Me</a>
                        </li>
                        <li>
                            <a href=''>Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex min-h-screen items-center justify-center'>
                <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start'>
                    <p>My Portfolio</p>
                    <button className='btn btn-primary'>Primary</button>
                </main>
            </div>
        </>
    );
}
