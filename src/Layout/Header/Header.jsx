import { Link, NavLink } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { MdHomeWork } from "react-icons/md";
import styles from "./Header.module.css";

const Header = () => {
const [isChecked, setIsChecked] = useState(false)

const [user] = useAuthState(auth)
console.log(user);
const logout =()=>{
    signOut(auth)
}

const navBarhandler =()=>{
    setIsChecked(!isChecked) 
}

    return (
            <nav className={styles.navMenu}>
            <Link to='/'><div className={styles.title}>
            <MdHomeWork className={styles.logo} style={{color:'#fff'}}/>
            <h1><span>H</span>ALAL JIBIKA</h1> 
            </div> </Link>

            <div className={styles.searchBar}>
            <input type="text" placeholder="search here" />
            <TbSearch className={styles.searhIcon} />
            </div>
            
            <div className={`${styles.mainMenu} ${isChecked?styles.mainMenuResponsive:''}`}>
            <NavLink to='/about'> About </NavLink>
            <NavLink to='/contact'> Contact </NavLink>
            <NavLink to='/jobs'> Jobs </NavLink>
            <NavLink to='/favourite'> Favourite </NavLink>
            {user? <Link className={styles.SignOut} onClick={logout}>Sign Out</Link> : <NavLink to='/login'>
            {isChecked? <p className={styles.Login}>Login</p> :<IoMdContact className={styles.loginIcon} />}</NavLink>}
            <div className={styles.userImg}>
            <span>{user?.photoURL? <img src={user?.photoURL}></img>:''}</span> 
            </div>
            </div> 

          
            <button onClick={navBarhandler} className={styles.reponsiveNav}>
            {<i>{ isChecked ?<FaRegTimesCircle /> :<FaBars /> }</i>} 
            </button>
        </nav>
    );
};

export default Header;