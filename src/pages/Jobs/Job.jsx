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
    const {id,title,companyName,position,location,exprience,eduq,date} = job;
    job.location='Any Where In Bangladesh'
    job.exprience = 'about 2 years'
    job.eduq = "Master's Degree"
    job.date = '25-12-2023'
    console.log(job);
    const [isShow,setIsShow]=useState(false)

    return (
            <>
                <div className={styles.jobsContent}>
                <div  className={styles.jobCard}>
                <i><MdHomeWork/></i>
                <div>
                <h3>{title}</h3>
                <h3>{companyName}</h3>
                <p>{position}</p>

                <div className={styles.jobsDetails}>
                {/* <Link to={`/jobs/${id}`}> */}
                <button onClick={()=>setIsShow(!isShow)}>
                {
                    isShow ? 'hide' : "Show Details"
                }
                </button>
                {/* </Link> */}
                </div>
                </div>
                </div>

                <div>
                {
                    isShow && 
                    <div className={styles.jobDetails}>
                        <h3>{title}</h3>
                        <h3>{companyName}</h3>

                        <div className={styles.flex}><MdLocationPin />
                        <p>{location}</p> </div>

                        <div className={styles.flex}><HiAcademicCap />
                        <p>{eduq}</p></div>

                        <div className={styles.exp_date}>
                        <div className={styles.flex}><MdWorkHistory />
                        <p>{exprience}</p></div>
                       
                        <div className={styles.flex}><MdOutlineDateRange />
                        <p>{date}</p></div>
                        </div>
                        
                        <div>
                        <Link to={`/jobs/${id}`}>Description</Link> 
                        </div>
                    </div>
                }
                </div>
                </div>
            </>
          
    );
};

export default Job;