import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const About = () => {
    const [counterOn, setCounterOn] = useState(false);

  return (
    <div name='about' className='mt-20 w-full'>
        <div className='bg-gradient-to-r from-indigo-300 via-gray-300 to-indigo-200 lg:h-[350px] w-screen px-5 lg:px-10 xl:px-28 2xl:px-52'>
            <h1 className='text-3xl text-center py-10 font-bold text-white'>ABC IN NUMBERS</h1>
            <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='md:space-y-4 mb-12'>
                    <div className='text-4xl text-center bg-black/10 text-white md:py-5 rounded-full border-b-2 font-bold'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1>
                                {counterOn && <CountUp start={0} end={350} duration={4} delay={0} />}
                            </h1>
                        </ScrollTrigger>
                    </div>        
                    <p className='text-center text-xl text-white font-bold'>Students</p>
                    <p className='text-center text-xl text-white font-bold'>22/23 Academic Year</p>
                </div>
                <div className='md:space-y-4 mb-12'>
                    <div className='text-4xl text-center bg-black/10 text-white md:py-5 rounded-full border-b-2 font-bold'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1>
                                {counterOn && <CountUp start={0} end={20} duration={3} delay={0} />}
                            </h1>
                        </ScrollTrigger>
                    </div>
                    <p className='text-center text-xl text-white font-bold'>Teachers</p>
                    <p className='text-center text-xl text-white font-bold'>22/23 Academic Year</p>
                </div>
                <div className='md:space-y-4 mb-12'>
                    <div className='text-4xl text-center bg-black/10 text-white md:py-5 rounded-full border-b-2 font-bold'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1>
                                {counterOn && <CountUp start={0} end={3} duration={2} delay={0} />}
                            </h1>
                        </ScrollTrigger>
                    </div>
                    <p className='text-center text-xl text-white font-bold'>Fields of Study</p>
                    <p className='text-center text-xl text-white font-bold'>Science, Commerce & Science</p>
                </div>
                <div className='md:space-y-4 mb-10'>
                    <div className='text-4xl text-center bg-black/10 text-white md:py-5 rounded-full border-b-2 font-bold'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1>
                                {counterOn && <CountUp start={0} end={15} duration={3} delay={0} />}
                            </h1>
                        </ScrollTrigger>
                    </div>
                    <p className='text-center text-xl text-white font-bold'>Classes</p>
                    <p className='text-center text-xl text-white font-bold'>22/23 Academic Year</p>
                </div>
            </div>
        </div>
        <div className='px-5 lg:px-10 xl:px-28 2xl:px-52 grid lg:grid-cols-2 gap-5 mt-20'>
            <div className='space-y-3 rounded-2xl shadow-xl bg-gray-100 p-4 mb-5 lg:mb-0'>
                <h1 className='text-3xl font-bold text-indigo-500'>Mission Statement</h1>
                <p className='text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit atque ea. Magnam, tempora? Architecto deleniti quam eum blanditiis velit praesentium id. Labore, voluptas perferendis! Natus delectus dignissimos similique quos tempore, voluptatibus accusamus placeat voluptate accusantium assumenda quas quia adipisci. Possimus, dolorem. Reiciendis temporibus, eum fugit repellat iusto omnis inventore ut quasi repellendus? Suscipit voluptas odio officia! Quisquam reiciendis quibusdam quis ipsum doloremque distinctio veritatis aut quia possimus laudantium similique nulla tempora, ducimus sequi alias. Minima reprehenderit sed fuga, similique est ullam nesciunt reiciendis incidunt molestiae provident consequuntur ea quae ratione, optio eveniet id cumque amet esse recusandae fugiat sapiente!</p>
            </div>
            <div className='space-y-3 rounded-2xl bg-gray-100 shadow-xl p-4'>
                <h1 className='text-3xl font-bold text-indigo-500'>Vission Statement</h1>
                <p className='text-lg text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia fuga molestiae vel dignissimos nobis rerum, earum ab impedit inventore officia ipsa maxime natus consequuntur asperiores. Eligendi odio totam perferendis repudiandae hic culpa voluptate odit ducimus corporis doloribus ut voluptatum obcaecati assumenda modi harum voluptas eos deleniti, nemo magnam voluptates soluta. Perspiciatis culpa nesciunt assumenda laborum beatae fugit a debitis in voluptate vel, quia vero? Harum sit commodi laudantium minima earum enim dolor voluptates aut. Porro deserunt aspernatur eos laboriosam, modi iure minus temporibus quis. Facilis expedita, quae quis voluptates rem asperiores iste, aspernatur voluptatum quasi blanditiis dolor minima consectetur.</p>
            </div>
        </div>
        <div className='px-5 lg:px-10 xl:px-28 2xl:px-52 mt-10'>
            <div className='rounded-2xl shadow-xl bg-gray-100'>
                <h1 className='text-3xl font-bold pt-5 pl-5 text-indigo-500'>School Rules</h1>
                <ul className='list-decimal pl-10 text-lg text-justify'>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim in quidem quos eius quaerat facilis provident amet quis incidunt tenetur?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam beatae culpa rerum repellendus, vitae amet.</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae cupiditate distinctio enim ad ipsum fugit quo excepturi eos non odio?</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium molestiae, sint sapiente esse totam doloribus minus autem repellat harum aut, voluptatibus obcaecati hic pariatur ad.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste cupiditate obcaecati rerum facilis harum perspiciatis illum, quaerat minus!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis maiores, asperiores tempore quo beatae doloremque ex, sunt perspiciatis voluptatem dignissimos quibusdam.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deleniti asperiores incidunt rem commodi harum facilis?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem aliquid molestiae amet ipsam necessitatibus voluptatum rerum aut nemo libero.</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iure omnis optio voluptatibus aut, fuga nostrum repellat sint, officia deleniti nulla necessitatibus praesentium! Dolores, fugit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rem.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About