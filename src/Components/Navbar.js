import React,{Fragment, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../mlogocolor.png';
import {Link} from 'react-router-dom';
import {FaHome,FaSearch,FaBars,FaRegTimesCircle,FaTelegram} from 'react-icons/fa'

const Navbar =()=>{

    const[showMenu,setShowMenu]=useState(false)
    return (
        <Fragment>
            <nav>
                <i className="fa-bars text-white" onClick={() => setShowMenu(true)}><FaBars/></i>
 
                <h2>
                <Link to="/" className='text-decoration-none'><a className="App-link" href="#">
                <img src={logo} className="App-logo m-2" alt="logo" />
                <p>Melobit</p>
                </a></Link>
                </h2>

                <div className={showMenu ? 'menu mobile-menu' : 'menu'}>
                    <ul>
                        <i className="fa-times" onClick={() => setShowMenu(false)}><FaRegTimesCircle/></i>
                        <li><Link to="/"><a href="#"><FaHome/> Home</a></Link></li>
                        <li><a href="#">Favorite Songs</a></li>
                        <li><a href="#"> PlayList</a></li>
                        <li><a href="#">History</a></li>
                    </ul>
                    <div className="nav-link">
                        <a className='text-decoration-none text-info-emphasis mb-3' href="https://t.me/s/melodio"><FaTelegram/> Login With Telegram</a>
                    </div>
                    </div>
                    <div className="nav-icons">
                        <i className='text-white nav-search' href="#">
                            <Link to="/search">
                            <FaSearch className='text-light search-icon' />
                        </Link></i>
                        <i className='fas Login bg-white p-2' aria-hidden="true">
                            <a className='text-decoration-none' href="https://t.me/s/melodio"><FaTelegram/> Login With Telegram</a></i>
                    </div>

                    <div className={showMenu ? 'overlay active' : 'overlay'}></div>


                
            </nav>
        </Fragment>
    )
}
export default Navbar;