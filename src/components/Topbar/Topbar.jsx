import logo from '../../assets/images/logo.png';
import {FaTelegram, FaYoutube, FaWhatsapp, FaInstagram} from 'react-icons/fa';
import './topbar.css'

function Topbar() {
    return (
        <div className="topbar">
            <div className="top1">
                <div className="search">
                  <input type="search" />
                </div>

            <div className="img">
                <a href="/">                 
                <img src={logo} alt="Logotipo da empresa Golden Path" />
                </a>
            </div>

            <div className="social">
                <p><FaTelegram /></p>
                <p><FaWhatsapp /></p>
                <p><FaInstagram /></p>
                <p><FaYoutube /></p>
            </div>
            </div>
        </div>
    )
}

export {Topbar}