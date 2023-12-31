
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeWork } from "react-icons/md";
const Footer = () => {
    return (
        <section>
           <div className={styles.footerSection}>
            
            <div className= {styles.footerLogo}>
            <div>
            <NavLink to='/'><div className={styles.title}>
            <MdHomeWork className={styles.logo} />
            <h1><span>H</span>HALAL JIBIKA</h1> 
            </div> </NavLink>
            </div>

            <p>This is a big one and i consider it one of the most important things for a business.</p>

            <div className={styles.footerIcon}>
            <RiFacebookBoxLine />
            <FaInstagram />
            <CiLinkedin />
            <FaXTwitter />
            </div>
            </div>

           <div className={styles.footerMenu}>
            <h3>Quick Links</h3>
            <NavLink to='/home'> Home </NavLink>
            <NavLink to='/about'> About </NavLink>
            <NavLink to='/contact'> Contact</NavLink>
            <NavLink to='/appointment'> Appointment </NavLink>
            <NavLink to='/blog'>Blog</NavLink>
           </div>

           <div className={styles.footerMenu}>
            <h3>Company</h3>
            <NavLink to='/carrers'> Careers </NavLink>
            <NavLink to='/pricing'> Pricing</NavLink>
            <NavLink to='/entertainment'> Entertainment </NavLink>
           </div>

           <div className={styles.footerMenu}>
            <h3>Information</h3>
            <NavLink to='/privacy'> Privacy Policy </NavLink>
            <NavLink to='/terms&condition'> Terms & Condition </NavLink>
            <NavLink to='/faq'> FAQ</NavLink>
           </div>

         </div>

        <div className={styles.footerBottom}>
            <p>Copyright © 2023 <span>P</span>roject <sup>bd</sup></p>
            <p>All Rights Reserved</p>
        </div>
        </section>
    );
};

export default Footer;