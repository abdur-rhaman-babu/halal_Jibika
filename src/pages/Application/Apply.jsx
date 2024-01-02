/* eslint-disable react/prop-types */
import styles from "./Apply.module.css";
const Apply = ({allFormData}) => {
    // console.log(allFormData);
    return (
        <div className={styles.formContainer}>
            {
                allFormData && allFormData.map((data,index)=>{
                    return <div key={index} className={styles.formDetails}>
                        <h1>Congratulations</h1>
                        <div className={styles.flex}>
                         <h3><span>First Name: </span>{data.firstname}</h3>
                        <h3><span>Last Name:</span>  {data.lastname}</h3>
                        </div>
                        <h3><span>Date of Birth: </span>{data.dateOfBirth}</h3>
                        <h3><span>Blood Group: </span>{data.bloodgroup}</h3>
                       
                        <h3><span>Gender: </span>{data.gender}</h3>
                        
                        <h3><span>NID:</span> {data.nid}</h3>
                        <h3><span>Email: </span>{data.email}</h3>
                        <h3><span>Phone: </span>{data.phone}</h3>
                        <h3><span>Address:</span> {data.address}</h3>
                    </div>
                })
            }
        </div>
    );
};

export default Apply;