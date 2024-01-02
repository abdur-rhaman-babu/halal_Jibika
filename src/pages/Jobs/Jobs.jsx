import { useLoaderData } from "react-router-dom";
import Job from "./Job";
import styles from "./Job.module.css";
const Jobs = () => {
    const jobs = useLoaderData()
    // console.log(jobs);
    return (
       <div style={{display:'flex'}}>
         <div className={styles.mainContent}>
            {
                jobs && jobs.map((job)=><Job key={job.id} job={job}/>)
            }
        </div>
       </div>


    );
};

export default Jobs;