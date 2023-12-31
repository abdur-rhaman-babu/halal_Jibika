/* eslint-disable react/prop-types */
import styles from "./Job.module.css";
import { MdHomeWork } from "react-icons/md";
import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { MdWorkHistory } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from 'react-router-dom';
const Job = ({job}) => {
    const {id,title,companyName,position,location,experience,educationQualification,deadline,logo} = job;
    console.log(job);

    const [isShow,setIsShow]=useState(false)

    return (
            <>
            <div className={styles.container}>
         
                <div className={styles.jobsContent}>

                <div className={styles.jobCards}>
                <div  className={styles.jobCard}>
                <i><MdHomeWork/></i>

                <div>
                <h3>{title}</h3>
                <h3>{companyName}</h3>
                <p>{position}</p>

                <div className={styles.jobsDetails}>
                <button onClick={()=>setIsShow(!isShow)}>
                {
                    isShow ? 'hide' : "Show Details"
                }
                </button>
                </div>

                </div>

                </div>
                </div>
               
            <div>
                {
                    isShow && 
                    <div className={styles.jobDetails}>
                        <div className={styles.jobTitle}>
                        <h3>{title}</h3>
                        <img src={logo} alt="" />
                        </div>
                        <h3>{companyName}</h3>

                        <div className={styles.flex}><MdLocationPin />
                        <p>{location}</p> </div>

                        <div className={styles.flex}><HiAcademicCap />
                        <p>{educationQualification}</p></div>

                        <div className={styles.exp_date}>
                        <div className={styles.flex}><MdWorkHistory />
                        <p>{experience}</p></div>
                       
                        <div className={styles.flex}><MdOutlineDateRange />
                        <p>{deadline}</p></div>
                        </div>
                        
                        <div className={styles.jobDescription}>
                        <Link to={`/jobs/${id}`}><button>Description</button></Link> 
                        </div>
                    </div>
                }
                </div>
            </div>
                       
            </div>
            </>
          
    );
};

export default Job;