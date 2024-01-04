/* eslint-disable react/prop-types */
import styles from "./Job.module.css";
import { MdHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    title,
    companyName,
    position,
    logo,
  } = job;
//   console.log(job);
 
  return (
    <section>
    <div className={styles.container}>
      <div className={styles.jobsContent}>
        <div className={styles.jobCards}>
          <div className={styles.jobCard}>
             <div className={styles.jobTitle}><i> <MdHomeWork /> </i>
              <img src={logo} alt="" /></div>
              <div>
               <h3>{title}</h3>
                <h3>{companyName}</h3>
                  <div className={styles.posIcon}>
                  <div><h5>{position}</h5> </div>
              </div>
              <Link to={`/jobs/${id}`}><button className={styles.jobsDetails}>Continue for Application</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  
  );

};

export default Job;
