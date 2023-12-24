/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./users.module.css";
const User = ({user:{id,name,username,phone,website,address:{street}}}) => {
    return (
        <div  className={styles.userCard}>
            <h3>Name: {name}</h3>
            <h4>UserName: {username}</h4>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Website: {street}</p>
            <div className={styles.userDetails}>
            <Link to={`/users/${id}`}>
            <button>See details</button>
          </Link>
            </div>
        </div>
    );
};

export default User;