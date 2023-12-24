import { Link, NavLink } from "react-router-dom";
import { PiDropboxLogoFill } from "react-icons/pi";
import styles from "./Header.module.css";
import { TbSearch } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";


const Header = () => {
const [isChecked, setIsChecked] = useState(false)

const [user] = useAuthState(auth)

const logout =()=>{
    signOut(auth)
  }

const navBarhandler =()=>{
    setIsChecked(!isChecked) 
}

    return (
            <nav className={styles.navMenu}>
            <NavLink to='/'><div className={styles.title}>
            <PiDropboxLogoFill className={styles.logo}/>
            <h1><span>P</span>ROJECT  <sup>BD</sup></h1> 
            </div> </NavLink>

            <div className={styles.searchBar}>
            <input type="text" placeholder="search here" />
            <TbSearch className={styles.searhIcon} />
            </div>
            
                <div className={`${styles.mainMenu} ${isChecked?styles.mainMenuResponsive:''}`}>
                <NavLink to='/about'> About </NavLink>
                <NavLink to='/contact'> Contact </NavLink>
                <NavLink to='/users'> Users</NavLink>
                <NavLink to='/blog'> BLog </NavLink>
                 </div> 

            <button onClick={navBarhandler} className={styles.reponsiveNav}>
                {
                <i>{ isChecked ?<FaRegTimesCircle /> :<FaBars /> }</i>
                }
            </button>
            {
                user? <Link className={styles.SignOut} onClick={logout}>Sign Out</Link> : <NavLink to='/login'>{isChecked?'Login':<IoMdContact className={styles.loginIcon} />}</NavLink>
            }
            <div className={styles.userImg}>
            <span>{user?.photoURL?<img src={user?.photoURL}></img>:""}</span> 
            </div>
        </nav>
    );
};

export default Header;