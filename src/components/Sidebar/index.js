import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-b.png'
import LogoSubtilte from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faHackerrank} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        <img className='sub-logo' src={LogoSubtilte} alt="bharti" />
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
     <ul>
        <li>
            <a target="_blank"
            rel="noreferrer"
            href="http://www.linkedin.com/in/bhartipatel2503/"
            > 
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank"
            rel="noreferrer"
            href="http://github.com/Indiana-S-coder"
            > 
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank"
            rel="noreferrer"
            href="http://leetcode.com/Indiana-S-coder/"
            > 
              <FontAwesomeIcon icon={faHackerrank} color="#4d4d4e"/>
            </a>
        </li>
     </ul>
    </div>
)

export default Sidebar