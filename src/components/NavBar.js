import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {

    const [menuIcone, setMenuIcone] = useState(true);


    return (
        <div>
            <nav class="navbar navbar-expand-lg px-5 " style={{}}>
                <div class="container-fluid">
                    <NavLink style={{ textDecoration: 'none', }} class="navbar-brand" to="/"><h2>
                        <strong className='text-white'>Chat-GPT 4.5</strong>
                    </h2></NavLink>
                    <button class="navbar-toggler border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span class="navbar-toggler-icon" >
                            {
                                menuIcone ? <i style={{ fontSize: '2rem', color: 'white' }} className="fa-solid fa-bars" onClick={() => setMenuIcone(false)}></i> :
                                    <i style={{ color: 'white', fontSize: '2rem' }} className="fa-solid fa-xmark" onClick={() => setMenuIcone(true)}></i>
                            }


                        </span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">


                        <ul class="navbar-nav m-auto mb-2 mb-lg-0 gap-3 text-white">

                            <li class="nav-item">
                                <NavLink style={{ textDecoration: 'none', color: 'red', }} class="nav-link text-danger" to="/text">Text-Generator</NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink style={{ textDecoration: 'none', color: 'green' }} class="nav-link text-success" to="/image">Image-Generator</NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink style={{ textDecoration: 'none', color: 'blue' }}

                                    class="nav-link text-info" to="/summary"  >Eng-Hindi</NavLink>
                            </li>



                        </ul>

                        <div class="d-flex me-end fs-3 gap-3">

                            <a href='https://www.facebook.com/profile.php?id=100023756560146' target='_blank'>
                                <i style={{ cursor: 'pointer' }} class="fa-brands fa-facebook text-primary"></i>
                            </a>
                            <a href='https://www.instagram.com/be_creative7238/' target='_blank'>
                                <i class="fa-brands fa-square-instagram " style={{ cursor: 'pointer', color: '#C13584' }}></i>
                            </a>
                            <a href='https://www.linkedin.com/in/harikesh839/' target='_blank'>
                                <i style={{ cursor: 'pointer' }} class="fa-brands fa-linkedin text-info"></i>
                            </a>
                            <a href='https://github.com/codewithharry749' target='_blank'>
                                <i class="fa-brands fa-github " style={{ cursor: 'pointer', color: '#4078c0' }}></i>
                            </a>
                        </div>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default NavBar;