import HomeImg from './HomeImg/Job-vs-Business-What-is-Better-.jpg';
import styles from "./Home.module.css";
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <section>
      <div className={styles.banner_area}>
        <div className={styles.banner_text}>
          <h3>Halal Job Network</h3>
          <h1>Find Your Prefered Job</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <NavLink to='/login'>
             <p className={styles.Login}></p> <button>Explore Now</button>
          </NavLink>
        </div>
        <div className={styles.banner_img}>
          <img src= {HomeImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
