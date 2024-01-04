import HomeImg from "./HomeImg/bannerJob.png";
import styles from "./Home.module.css";
import { Link, NavLink} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdHomeWork } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
// import swal from "sweetalert";
const Home = () => {
  const [newJobs, setNewJobs] = useState();
  // console.log(newJobs);
  const jsonFakeSarver = async () => {
    try {
      const response = await axios.get("http://localhost:9000/jobs");
      setNewJobs(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


// deleteJobHandler
const deleteJobHandler = (id) => {
        axios
          .delete(`http://localhost:9000/jobs/${id}`)
          .then(() => {
            jsonFakeSarver();
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
          });
      }

  useEffect(() => {
    jsonFakeSarver();
  }, []);

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
          <div className={styles.explorNew}>
          <NavLink to="/login">
           <button>Register Now</button>
          </NavLink>
          <NavLink to="/addjob"><button className={styles.newJob}>AddJob</button></NavLink>
          </div>
        </div>
        <div className={styles.banner_img}>
          <img src={HomeImg} alt="" />
        </div>
      </div>
      {newJobs &&
        newJobs.map((newJob) => {
          return (
            <>
                    <div className={styles.newJobContainer}>
                      <div key={newJob.id} className={styles.newJobCard}>
                      <div className={styles.newjobTitle}>
                        <i><MdHomeWork /></i>
                        <img src={newJob.logo} alt="" className="" />
                      </div>
                      <div>
                        <h3>{newJob.title}</h3>
                        <h3>{newJob.companyName}</h3>
                        <div className={styles.posIcon}>
                          <div>
                            <h4>{newJob.position}</h4>
                          </div>
                          <div className={styles.jobIcon}>
                          {/* <i><MdDelete /></i> */}
                          <i className="btn-danger" onClick={()=>deleteJobHandler(newJob.id)}> <MdDelete /></i>
                          <i><FaEdit /> </i>
                          <i><IoMdHeartEmpty /></i>
                          </div>
                        </div>
                        <Link to='./jobs'> 
                          <button className={styles.jobsDetails}>
                            Show More
                          </button></Link>
                      </div>
                    </div>
                  </div> 
                </>
          );
        })}
    </section> 
  );
};

export default Home;
