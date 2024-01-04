import { useLoaderData } from "react-router-dom";
import Job from "./Job";
import styles from "./Job.module.css";
const Jobs = () => {
    const jobs = useLoaderData()
    // console.log(jobs);
    return (
        <> 
        <div className={styles.jobBanner}>
        <div>
         <img src="http://surl.li/owfvo" alt="" />
        </div>
        <div>
            <h1>Welcome to our 10 Minute Job Interview Presentation</h1>
        </div>
        <div>
            <img src="http://surl.li/owgef" alt="" />
        </div>
        </div>
       <div style={{display:'flex'}}>
         <div className={styles.mainContent}>
         
            {
                jobs && jobs.map((job)=><Job key={job.id} job={job}/>)
            }
        </div>
       </div>

       </>
    );
};

export default Jobs;