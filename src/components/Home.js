import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import Typewriter from 'typewriter-effect';

import 'react-clock/dist/Clock.css';

const Home = () => {

    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <div className='container '>
            <div className='row'>
                <div className=' col-12 d-flex flex-column justify-content-center align-item-center text-center '>

                    <div>
                        <div className='d-flex flex-column justify-content-center align-content-center align-items-center ' style={{ marginTop: '20vh', color: "red" }}>
                            <Clock value={value}
                                hourHandLength={60}
                                hourHandOppositeLength={20}
                                hourHandWidth={5}
                                hourMarksWidth={2}
                                locale='hu-HU'
                                minuteHandLength={80}
                                minuteHandOppositeLength={20}
                                minuteHandWidth={3}
                                minuteMarksLength={8}
                                renderHourMarks={true}
                                secondHandLength={85}
                                secondHandOppositeLength={20}
                                secondHandWidth={2}
                                size={150}

                            />

                        </div>
                        <h1 style={{ marginTop: '3vh' }}>Hello, I am <i className='text-info fw-bold'>chat GPT</i></h1>
                    </div>

                    <div>

                        <Typewriter
                            options={{
                                strings: ['Provideing you all ralevent details', 'provided important topics to understatnd chat GPT', 'help to develope your confidence in prompt Engineering', 'i help to write content and code for you'],
                                autoStart: true,
                                loop: true,

                            }}
                        />
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Home;