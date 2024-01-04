import HomeImg from "./HomeImg/bannerJob.png";
import styles from "./Home.module.css";
import { Link, NavLink} from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { MdHomeWork } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import Swal from "sweetalert2";
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
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  })
        .then((result) => {
          if (result.isConfirmed) {
            axios.delete(`http://localhost:9000/jobs/${id}`)
              .then(() => {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                jsonFakeSarver(); 
              })
              .catch((error) => {
                console.error("Error deleting user:", error);
              });
             }
            })
        .catch((error) => {
          console.error("Error displaying confirmation:", error);
        });
   }

   //setDateToLocalStroage
   const setDateToLocalStroage = (id,logo,title,companyName,position,location,experience,deadLine,educationQualification,description)=>{
    localStorage.setItem('id',id)
    localStorage.setItem('logo',logo)
    localStorage.setItem('title',title)
    localStorage.setItem('companyName',companyName)
    localStorage.setItem('position',position)
    localStorage.setItem('location',location)
    localStorage.setItem('experience',experience)
    localStorage.setItem('deadLine',deadLine)
    localStorage.setItem('educationQualification',educationQualification)
    localStorage.setItem('description',description)
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
          In Islamic teachings, the concept of halal income refers to earnings acquired through
           lawful and ethical means, aligning with Sharia principles. Muslims are encouraged to engage 
           in professions and business ventures that adhere to ethical standards, avoiding industries such 
           as gambling, usury, and those involving harmful substances. 
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
            <Fragment key={newJob.id}>
                    <div  className={styles.newJobContainer}>
                      <div className={styles.newJobCard}>
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
                          <i className="btn-danger" onClick={()=>deleteJobHandler(newJob.id)}> <MdDelete /></i>
                          <Link to = "/updatejob"><i onClick={()=>setDateToLocalStroage(
                            newJob.id,
                            newJob.logo,
                            newJob.title,
                            newJob.companyName,
                            newJob.position,
                            newJob.location,
                            newJob.experience,
                            newJob.deadLine,
                            newJob.educationQualification,
                            newJob.description,
                            )}><FaEdit /> </i></Link>
                          
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
               </Fragment>
          );
        })}
    </section> 
  );
};

export default Home;
