function AboutMe() {
    return (
        <div className='bg-base-200 container mx-auto grid grid-cols-2'>
            <div className='flex'>
                <div>8+ Years of Experience</div>
                <div>Web/Software Development</div>
                <div>Web Design</div>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl'>About Me</h2>
                <p>
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
        </div>
    );
}

export default AboutMe;
