/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Job.module.css";
import { MdHomeWork } from "react-icons/md";

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
    <div className={styles.container}>
      <div className={styles.jobsContent}>
        <div className={styles.jobCards}>
          <div className={styles.jobCard}>
             <div className={styles.jobTitle}><i> <MdHomeWork /> </i>
              <img src={logo} alt="" /></div>
            <div>
              <h3>{title}</h3>
              <h3>{companyName}</h3>
              <p>{position}</p>
            
                <Link to={`/jobs/${id}`}><button className={styles.jobsDetails}>Show More</button></Link>
  

            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Job;
