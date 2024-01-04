import { useState } from "react";
import styles from "./Apply.module.css";
import Apply from "./Apply";
import Swal from "sweetalert2";
// import { getDatafromLs } from "../../Components/GetDataFromLs/getDataFromLs";
const Applies = () => {
  const initialFormData = {
    firstname: "",
    lastname: "",
    email: "",
    nid: "",
    bloodgroup: "A+",
    address: "",
    phone:'',
    dateOfBirth:'',
    gender:''
  };
  
  const [allFormData, setAllFormData] = useState([]);
  //   console.log(allFormData);
  const [formData, setFormData] = useState(initialFormData);
  const [showApply, setShowApply] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstname || !formData.lastname || !formData.nid || !formData.bloodgroup || !formData.address|| !formData.phone|| !formData.dateOfBirth|| !formData.gender|| !formData.email) {
      Swal.fire({
          icon: "error",
          title: "Please fill in all required fields",
          showConfirmButton: true,
      });
      return;
  }


    setShowApply(!showApply);
    setAllFormData([...allFormData, formData]);
    emptyInput();
  };

  //   emptyInput
  const emptyInput = () => {
    setFormData(initialFormData);
  };

  // blood group
  const bloodGroup = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  let allBloodGroup = [];
  for (let i = 0; i < bloodGroup.length; i++) {
    allBloodGroup.push(bloodGroup[i]);
  }

  // blood group
  const gender = ['Male','Famale','Custom','Other'];
  let allGender = [];
  for (let i = 0; i < gender.length; i++) {
    allGender.push(gender[i]);
  }

  return (
    <>
      <section>
        {showApply ? (
          <Apply allFormData={allFormData} />
        ) : (
          <div className={styles.formContainer}>
            <div className={styles.formTitle}>
              <h1>Welcome and Continue</h1>
              <form onSubmit={handleSubmit}>
                <fieldset className={styles.mainForm}>
                  <legend>Personal Information</legend>
                  <div className={styles.firstLastName}>
                    <label htmlFor="firstname">First Name:</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="lastname">Last Name:</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      
                    />
                  </div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  
                  />
                  <br />
                  <label htmlFor="nid">National ID:</label>
                  <input
                    type="text"
                    id="nid"
                    name="nid"
                    value={formData.nid}
                    onChange={handleChange}
                   
                  />
                  <br /> <br />
                  <label htmlFor="address">Address:</label> <br />
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    
                  ></textarea>
                  <br />
                  <label htmlFor="bloodgroup">Blood Group:</label>
                  <select
                    id="bloodgroup"
                    name="bloodgroup"
                    value={formData.bloodgroup}
                    onChange={handleChange}
                   
                  >
                    {allBloodGroup.map((bloodGroup) => {
                      return (
                        <option key={bloodGroup} value={bloodGroup}>
                          {bloodGroup}
                        </option>
                      );
                    })}
                  </select>
                  <br /> 
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  
                  />
                  <br />
                  <label htmlFor="dateOfBirth">Date of Birth:</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                   
                  />
                  <br />
                  <label htmlFor="gender">Gender:</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                   
                  >
                    {allGender.map((gender) => {
                      return (
                        <option key={gender} value={gender}>
                          {gender}
                        </option>
                      );
                    })}
                  </select> <br /> <br />
                  <button className={styles.apply_btn} type="submit">Submit</button>
                </fieldset>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Applies;
