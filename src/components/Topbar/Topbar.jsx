import logo from '../../assets/images/logo.png';
import {FaTelegram, FaYoutube, FaWhatsapp, FaInstagram, FaSearch} from 'react-icons/fa';
import './topbar.css'

function Topbar() {
    return (
        <div className="topbar">
            <div className="top1">
                <div className="search">
                  <input type="search" placeholder="Buscar"/>
                  <FaSearch />
                </div>

            <div className="img">
                <a href="/">                 
                <img src={logo} alt="Logotipo da empresa Golden Path" />
                </a>
            </div>

            <div className="social">
                
                <div className="icon"><a href=""><FaTelegram /></a></div>
                <div className="icon"><a href=""><FaWhatsapp /></a></div>
                <div className="icon"><a href=""><FaInstagram /></a></div>
                <div className="icon"><a href=""><FaYoutube /></a></div>
            </div>
            </div>
        </div>
    )
}

export {Topbar}