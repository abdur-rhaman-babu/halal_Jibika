/* eslint-disable react/prop-types */
import { NavLink, useLoaderData } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { MdWorkHistory } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import styles from "./Job.module.css"
const JobDetails = () => {
  
    const {
        title,
        companyName,
        location,
        experience,
        educationQualification,
        deadline,
        logo,
        applicationRequirements,
        applicationProcess}= useLoaderData()
        
    return (
        <div className={styles.DetailsContent}>
          <div className={styles.jobDetails}>
            <div className={styles.jobTitle}>
              <h3>{title}</h3>
              <img src={logo} alt="" />
            </div>
            <h3>{companyName}</h3>

            <div className={styles.flex}>
              <MdLocationPin />
              <p>{location}</p>
            </div>

            <div className={styles.flex}>
              <HiAcademicCap />
              <p>{educationQualification}</p>
            </div>

            <div className={styles.exp_date}>
              <div className={styles.flex}>
                <MdWorkHistory />
                <p>{experience}</p>
              </div>

              <div className={styles.flex}>
                <MdOutlineDateRange />
                <p>{deadline}</p>
              </div>
            </div>

            <h5 className={styles.jobDescription}>Application Requirements </h5>  
            <div> <div className={styles.applicationRequirements}>
            <p>Eligibility: {applicationRequirements.eligibility}</p>
            <ul>
              {applicationRequirements.skills.map((skill, index) => (
                <li key={index}>◼{skill}</li>
              ))}
            </ul>
            <ul>
              {applicationRequirements.documents.map((document, index) => (
                <li key={index}>◼{document}</li>
              ))}
            </ul>
          </div>
          <div className={styles.applicationProcess}>
            <h4>Application Process:</h4>
            <p>{applicationProcess.message}</p>
            <ol>
              {applicationProcess.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <button className={styles.ApplyNow}> <NavLink to='/applies' >Apply Now </NavLink></button>
          </div>
          </div>
          </div>
         </div>
    );
};

export default JobDetails;