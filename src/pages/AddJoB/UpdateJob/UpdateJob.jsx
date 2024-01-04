import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../Addjob.module.css";
import { useNavigate } from "react-router-dom";
const UpdateJob = () => {
    const goHomePage = useNavigate()
    const initialUpdate = {
      id:'',
      logo: '',
      title: '',
      companyName: '',
      position: '',
      location: '',
      experience: '',
      deadLine: '',
      educationQualification: '',
      description: '',
    }
    const [update, setUpdate] = useState(initialUpdate);
    //   get data
    useEffect(() => {
        const storedData = {
          id: localStorage.getItem('id') || '',
          logo: localStorage.getItem('logo') || '',
          title: localStorage.getItem('title') || '',
          companyName: localStorage.getItem('companyName') || '',
          position: localStorage.getItem('position') || '',
          location: localStorage.getItem('location') || '',
          experience: localStorage.getItem('experience') || '',
          deadLine: localStorage.getItem('deadLine') || '',
          educationQualification: localStorage.getItem('educationQualification') || '',
          description: localStorage.getItem('description') || ''
        };
    
        setUpdate(storedData);
      }, []);
    
      const jobUpdateOnChange = (e) => {
        setUpdate({ ...update, [e.target.name]: e.target.value });
      };

    
      const updateJobHandler = async (e) => {
        e.preventDefault();
    
        axios.put(`http://localhost:9000/jobs/${update.id}`, {
            title: update.title,
            logo: update.logo,
            companyName: update.companyName,
            position: update.position,
            location: update.location,
            experience: update.experience,
            deadLine: update.deadLine,
            educationQualification: update.educationQualification,
            description: update.description
          })
          .then(()=> {
            goHomePage('/')
          })
          .catch((error) => {
              console.error("Error deleting user:", error);
          });

         
      //  console.log(update);
      };

    return (
        <div className={styles.addJobContainer}>
        <div>
       <h2>Update Job</h2>
      <form onSubmit={updateJobHandler}>

       <div className={styles.jobForm}>
        <div>
        <fieldset className={styles.allInformation}>
          <legend>Job Information</legend>
          <div>
            <label>Logo:</label><br />
            <input type="text" name="logo" value={update.logo} onChange={jobUpdateOnChange} />
          </div>
          <div>
            <label>Title:</label><br />
            <input type="text" name="title" value={update.title} onChange={jobUpdateOnChange} />
          </div>
          <div>
            <label>Company Name:</label><br />
            <input type="text" name="companyName" value={update.companyName} onChange={jobUpdateOnChange} />
          </div>
          <div>
            <label>Position:</label><br />
            <input type="text" name="position" value={update.position} onChange={jobUpdateOnChange} />
          </div>
          <div>
            <label>Location:</label><br />
            <input type="text" name="location" value={update.location} onChange={jobUpdateOnChange} />
          </div>
          <div>
            <label>Experience:</label><br />
            <input type="text" name="experience" value={update.experience} onChange={jobUpdateOnChange} />
          </div>
        </fieldset>
        </div>
        <div>

        
        <fieldset className={styles.allInformation}>
          <legend>Additional Information</legend>
          <div>
            <label>Deadline:</label><br />
            <input type="date" name="deadLine" value={update.deadLine} onChange={jobUpdateOnChange} />
          </div>
          <div>
            <label>Education Qualification:</label><br />
            <input
              type="text"
              name="educationQualification"
              value={update.educationQualification}
              onChange={jobUpdateOnChange}
            />
          </div>
          <div>
            <label>Description:</label><br />
            <textarea name="description" value={update.description} onChange={jobUpdateOnChange} />
          </div>
        </fieldset>
        </div>
        </div>
        <button type="submit">Update Job</button>
     
      </form>
      </div>
      </div>
    );
};

export default UpdateJob;