import React, { useState } from 'react';
import image from '../image/aboutus.jpg'
import { Spin } from 'antd';

const About = () => {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 500);
    return (
        <Spin spinning={loading} tip='Loading...' size='large' style={{ height: '100vh' }}>
            <>
                <section className='section2'>
                    <img src={image} alt="about" />
                </section>
                <div className='div'>
                    <div>
                        <h2 style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>About Us</h2>
                    </div>
                    <div>
                        <p >At TechInnovators, we are a team of forward-thinking developers, designers, and technology enthusiasts dedicated to transforming ideas into impactful digital solutions. Established in 2015, our company has grown into a trusted name in the software industry, providing a range of services including custom software development, web and mobile app solutions, and cloud integration.

                            Our core philosophy revolves around innovation, quality, and customer satisfaction. We partner with businesses of all sizes to craft tailored software that meets their unique needs. From start-ups looking to launch their first app to enterprises seeking advanced data-driven platforms, our goal is to deliver seamless, scalable solutions that help our clients thrive in an ever-evolving digital landscape.

                            What sets us apart is our passion for combining technical expertise with creative problem-solving. We stay ahead of industry trends by continuously refining our skill sets and adopting the latest tools and frameworks. Whether it’s React for sleek user interfaces, Node.js for powerful back-end systems, or AI-driven analytics, we ensure that our solutions are both cutting-edge and reliable.

                            At TechInnovators, we don’t just develop software; we build lasting partnerships based on trust, transparency, and a shared vision for success. Your growth is our mission, and we’re here to support you every step of the way.</p>

                    </div>
                </div>
            </>
        </Spin>
    )
}

export default About;
