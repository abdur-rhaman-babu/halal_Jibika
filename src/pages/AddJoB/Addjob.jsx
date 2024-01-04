import { useState } from "react";
import styles from "./Addjob.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";

const Addjob = () => {
    const initialJobData = {
        logo:'',
        title:'',
        companyName:'',
        position:'',
        location:'',
        experience:'',
        deadLine:'',
        educationQualification:'',
        description:''
    }
const [allJob, setAllJob] = useState(initialJobData)
const goHome = useNavigate()
    // jobOnchangeHandler
const jobOnChangeHandler = (e)=>{
    setAllJob({
        ...allJob,
        [e.target.name]:e.target.value
    })
}

    // alljobhandler
    const allJobHandler = (e)=>{
        e.preventDefault()

        if (!allJob.title || !allJob.companyName || !allJob.position || !allJob.location || !allJob.experience || !allJob.deadLine || !allJob.logo|| !allJob.educationQualification|| !allJob.description) {
          Swal.fire({
              icon: "error",
              title: "Please fill in all required fields",
              showConfirmButton: true,
          });
          return;
      }
        axios.post('http://localhost:9000/jobs', {
          title: allJob.title,
          logo: allJob.logo,
          companyName: allJob.companyName,
          position: allJob.position,
          location: allJob.location,
          experience: allJob.experience,
          deadLine: allJob.deadLine,
          educationQualification: allJob.educationQualification,
          description: allJob.description
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    
        goHome('/')
        swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
    
    
    setAllJob(initialJobData)
        // console.log(allJob);
    }

    return (
    <div className={styles.addJobContainer}>
        <div>
       <h2>Add a New Job</h2>
      <form onSubmit={allJobHandler}>

       <div className={styles.jobForm}>
        <div>
        <fieldset className={styles.allInformation}>
          <legend>Job Information</legend>
          <div>
            <label>Logo:</label><br />
            <input type="text" name="logo" value={allJob.logo} onChange={jobOnChangeHandler} />
          </div>
          <div>
            <label>Title:</label><br />
            <input type="text" name="title"  value={allJob.title} onChange={jobOnChangeHandler} />
          </div>
          <div>
            <label>Company Name:</label><br />
            <input type="text" name="companyName" value={allJob.companyName} onChange={jobOnChangeHandler} />
          </div>
          <div>
            <label>Position:</label><br />
            <input type="text" name="position" value={allJob.position} onChange={jobOnChangeHandler} />
          </div>
          <div>
            <label>Location:</label><br />
            <input type="text" name="location" value={allJob.location} onChange={jobOnChangeHandler} />
          </div>
          <div>
            <label>Experience:</label><br />
            <input type="text" name="experience" value={allJob.experience} onChange={jobOnChangeHandler} />
          </div>
        </fieldset>
        </div>
        <div>

        
        <fieldset className={styles.allInformation}>
          <legend>Additional Information</legend>
          <div>
            <label>Deadline:</label><br />
            <input type="date" name="deadLine" value={allJob.deadLine} onChange={jobOnChangeHandler} />
          </div>
          <div>
            <label>Education Qualification:</label><br />
            <input
              type="text"
              name="educationQualification"
              value={allJob.educationQualification}
              onChange={jobOnChangeHandler}
            />
          </div>
          <div>
            <label>Description:</label><br />
            <textarea name="description" value={allJob.description} onChange={jobOnChangeHandler} />
          </div>
        </fieldset>
        </div>
        </div>
        <button type="submit">Add Job</button>
     
      </form>
      </div>
      </div>
    );
};

export default Addjob;