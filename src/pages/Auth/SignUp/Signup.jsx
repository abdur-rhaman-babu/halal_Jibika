/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./signup.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from "../../../firebase/firebase.init";
import { toast } from "react-toastify";
import Loading from './../../../Components/Loading/Loading';
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { BsBack } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
const Signup = () => {

  const [ createUserWithEmailAndPassword,user,loading,error] =useCreateUserWithEmailAndPassword(auth) 
  const navigate = useNavigate()

  const [showPassword,setShowPassword] = useState(false)
  const [signup,setSignUp] = useState({
    firstname:'',
    surename:'',
    email:'',
    newpassword:'',
    confirmpassword:''
  })

  // setShowPassword
  const setShowPasswordHandler = ()=>{
    setShowPassword(!showPassword)
  }

  // onchange
  const onChangeHandle = (e)=>{
    setSignUp({
      ...signup,
      [e.target.name]:e.target.value
    })
  }

 // form handler
  const signUpHandler =(e)=>{
      e.preventDefault()
    
    if(signup.newpassword !== signup.confirmpassword){
     return toast.error('worng password')
    }else{
      createUserWithEmailAndPassword(signup.email, signup.newpassword)
      .then(()=>{
       emptyInput()
      })
      .catch((error)=>{
      toast.error(error.message)
      })
    }
   };
  
   const emptyInput = ()=>{
    setSignUp({
      firstname:'',
      surename:'',
      email:'',
      newpassword:'',
      confirmpassword:''
    })
   }

  //  Loading
   if(loading){
    return <Loading></Loading>
   }
  
  //  errerHandle
   let errorElement;
   if(error){
    errorElement= <p>Error: {error?.message}</p>
    return toast.error('invalid account')
   }
  
  //  user
   let from = location.state?.from?.pathname || "/";
   if(user){
    console.log(user);
   navigate(from, { replace: true }); //important!
   toast.success(`Sign up Successfully Done`, {
     toastId: "success1",
   });
   }

  //  go back
  const handleGoBack = ()=>{
    navigate(-1)
  }

  // go home
  const handleGoHome = ()=>{
    navigate('/')
  }

      return (
        <div className={styles.signupcontainer}>
          <div className={styles.Form}>
            <form onSubmit={signUpHandler}>
              <div className={styles.signupformTitle}>

                <div className={styles.backHome}>
                 <i><BsBack onClick={handleGoBack}/></i>
                 <i><MdHomeWork onClick={handleGoHome} className={styles.goHome}/></i>
                </div>
                <h2>Sign Up </h2>
                <NavLink to='/login'> <FaTimes className={styles.faTimes}/> </NavLink>
              </div>
    
              <div className={styles.signupformName}>
                  <input type="text" placeholder="First name" onChange={onChangeHandle} name="firstname" value={signup.firstname} />
                  <input type="text" placeholder="Surename" onChange={onChangeHandle} name="surename"  value={signup.surename}/>
              </div>
    
                <div className={styles.signUpForm}>

                 <div className={styles.signUpEmail}>
                 <input  type="email" placeholder="Mobile number or email address" onChange={onChangeHandle} name="email" value={signup.email}/>
                 </div>

                 <div className={styles.signUpNewPass} onClick={setShowPasswordHandler}>
                 <input type={showPassword ? "text": "password"} placeholder="New password" onChange={onChangeHandle} name="newpassword" value={signup.newpassword}/> {showPassword ?<BsFillEyeFill />:<BsFillEyeSlashFill /> }
                 </div>

                 <div className={styles.signUpConfirmPass} onClick={setShowPasswordHandler}>
                 <input type= {showPassword ?"text": "password"} placeholder="confirmation password" onChange={onChangeHandle} name="confirmpassword" value={signup.confirmpassword}/>
                 {showPassword ?<BsFillEyeFill />:<BsFillEyeSlashFill /> }
                 </div>

              </div>
                {errorElement}
                 <div className={styles.signUpBtn}>
                <button type="submit"> Sign Up </button>
              </div>
           </form>
          </div>
        </div>
       
      );
};

export default Signup;




