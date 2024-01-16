import React, { useEffect, useState } from 'react';
import lang from '../lanuage';

const Summary = () => {

  const [rewritexts, setRewriteText] = useState('');
  const [inputText, setInputText] = useState('');
  const [copy, setCopy] = useState(false);
  const [selectlang, setSelect] = useState('')


  const RewriteText = async () => {

    // const url1 = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    // const options1 = {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'Accept-Encoding': 'application/gzip',
    //     'X-RapidAPI-Key': '32348d6df2msh8f01953b5992601p1daaacjsn26ef567c020b',
    //     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    //   },
    //   body: new URLSearchParams({
    //     q: 'Hello, world!',
    //     target: 'hi',
    //     source: 'en'
    //   })
    // };

    // try {
    //   const response = await fetch(url1, options1);
    //   const result = await response.text();
    //   console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }


    // ------------------------------
    console.log(inputText)


    const apiRequest = {
      language: `${selectlang}`,
      strength: 3,
      text: `${inputText}`
    }


    const url = 'https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '32348d6df2msh8f01953b5992601p1daaacjsn26ef567c020b',
        'X-RapidAPI-Host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com'
      },
      body: JSON.stringify(apiRequest)
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result)
      const rewriteTxt = await JSON.parse(result)
      setRewriteText(rewriteTxt.rewrite);

    } catch (error) {
      console.error(error);
    }

  }


  // copy text-------------

  const copyText = () => {
    navigator.clipboard.writeText(inputText)
    setTimeout(() => {
      setCopy(true)
    }, 500)

    setTimeout(() => {
      setCopy(false)
    }, 5000)
  }

  useEffect(() => {

  }, [setInputText, inputText, setRewriteText, setSelect, selectlang])

  return (
    <div className='container mt-5  p-3'>
      <h1 className='text-center text-success mb-5'>Convert from english to any language</h1>
      <div className='row'>
        {/* left-------- */}
        <div className='col-sm-12 col-md-6 col-lg-6 col-12'
          style={{ height: '355px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}
        >
          <select class="form-select mb-2" aria-label="Default select example" onChange={(e) => setSelect(e.target.value)}>
            {
              lang.map((ele) => {
                return <option value={ele}>{ele}</option>
              })
            }

          </select>
          <div class="form-floating">

            <textarea class="form-control"

              onChange={(e) => setInputText(e.target.value)}
              name='textArea'
              placeholder="Write text here to rewrite 🖊️" id="floatingTextarea2" style={{ height: '355px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}></textarea>

          </div>

          <button className='btn btn-success w-49 mt-2' onClick={() => RewriteText()}>Rewrite New Text 🩹</button>&nbsp;&nbsp;
          <button className='btn btn-primary w-49 mt-2'
            onClick={() => copyText()}>
            {
              copy ? "Text Copied 📝" : "Copy Text 📝"
            }
          </button>&nbsp;&nbsp;
          <button className='btn btn-danger w-49 mt-2'
            onClick={() => setInputText('')}>Delete Text 🏚️</button>&nbsp;&nbsp;


        </div>

        {/* right-------- */}
        <div className='col-sm-12 col-md-6 col-lg-6 col-12' style={{ minHeight: '400px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', padding: '1rem' }}>
          <h4>convert english to {selectlang}</h4>
          {rewritexts}
        </div>
      </div>


    </div>
  )
}

export default Summary