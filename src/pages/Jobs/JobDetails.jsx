import { useLoaderData } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { MdWorkHistory } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { useState } from "react";
import styles from "./Job.module.css"
const JobDetails = () => {
    const [showDetails,setShowDetails] = useState(false);
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

            <button className={styles.jobDescription} onClick={() => setShowDetails(!showDetails)}>
                  {showDetails ? "Hide Details" : "Description"}
                </button>

           {
            showDetails && <div> <div className={styles.applicationRequirements}>
            <h4>Application Requirements:</h4>
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
            <button className={styles.ApplyNow}>Apply Now</button>
          </div></div>
           }
          </div>
         </div>
    );
};

export default JobDetails;