import React, { useEffect, useState } from 'react'

const Image = () => {



    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');


    const [text, setText] = useState('');
    const [showImg, setShowimg] = useState(false)


    const API_KEY = "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";
    // console.log({ text, count })

    const generateImages = async () => {
        console.log(text)
        await fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(

                {

                    "model": "dall-e-2",
                    "prompt": `${text}`,
                    "n": 4,
                    "size": "1024x1024"
                }

            )
        }).then((data) => { return data.json() }).then((data) => {

            console.log(data.data)

            setImage1(data.data[0].url)
            setImage2(data.data[1].url)
            setImage3(data.data[2].url)
            setImage4(data.data[3].url)

            setShowimg(true)
        })

    }

    useEffect(() => {

    }, [setText, setImage1, setImage2, setImage3, setImage4, setShowimg])

    return (
        <div className='mt-4 container' style={{ minHeight: '88vh' }}>
            <div className='row'>
                {
                    showImg &&
                    (
                        <div className='col-sm-12 col-md-12 col-lg-12 col-12' style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

                            <img src={image1} alt='image not found' className='img-fluid'
                                style={{ width: '250px', height: '300px', borderRadius: '1.5rem', objectFit: 'cover', padding: '1rem', textAlign: 'center' }}
                            />

                            <img src={image2} alt='image not found' className='img-fluid'
                                style={{ width: '250px', height: '300px', borderRadius: '1.5rem', objectFit: 'cover', padding: '1rem', textAlign: 'center' }}
                            />
                            <img src={image3} alt='image not found' className='img-fluid'
                                style={{ width: '250px', height: '300px', borderRadius: '1.5rem', objectFit: 'cover', padding: '1rem', textAlign: 'center' }}
                            />
                            <img src={image4} alt='image not found' className='img-fluid'
                                style={{ width: '250px', height: '300px', borderRadius: '1.5rem', objectFit: 'cover', padding: '1rem', textAlign: 'center' }}
                            />


                        </div>
                    )}
            </div>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-12 col-12' >
                    <div class="mb-3 mt-5 d-flex gap-2 ">

                        <input type="email"
                            onChange={(e) => setText(e.target.value)}
                            class="form-control fw-bolder" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: '100%', padding: '1rem', borderRadius: '1.5rem' }} />


                        <button className='btn btn-success fw-bolder' style={{ width: '40%', padding: '1rem', borderRadius: '1.5rem', fontWeight: '1.5rem', }}
                            onClick={() => generateImages()}
                        >Generate Image</button><br />

                    </div>
                    <caption className='d-flex text-center justify-content-center' style={{ textAlign: 'center' }}>get ready to generate new new images as your thought</caption>
                </div>
            </div>

        </div>
    )
}

export default Image