
    import { useState } from "react";
    import styles from "./login.module.css";
    import { NavLink, useLocation, useNavigate} from "react-router-dom";
    import { MdOutlineMailOutline } from "react-icons/md";
    import { RiLockPasswordLine } from "react-icons/ri";
    import { PiDropboxLogoFill } from "react-icons/pi";
    import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
    import auth from './../../../firebase/firebase.init';
    import { toast } from "react-toastify";
    import Loading from './../../../Components/Loading/Loading';
    import { BsBack } from "react-icons/bs";
    import { BsFillEyeFill } from "react-icons/bs";
    import { BsFillEyeSlashFill } from "react-icons/bs";
    import SocialLogin from "../../../Components/SocialLogin/SocialLogin";



      const Login = () => {
      const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate()
      const location = useLocation()
      const [showPassword,setShowPassword] = useState(false)
  
    // all Input
      const [login,setLogin] = useState({
      email:'',
      password:''
      })


    // Show password 
    const setShowPasswordHandler = ()=>{
      setShowPassword(!showPassword)
    }

    // onChangeHandler
    const onChangehandle=(e)=>{
      setLogin({
      ...login,
      [e.target.name]:e.target.value
      })
    }

    // Loading Element
    if(loading){
      return <Loading></Loading>
    }

    // errorElement
    let errorElement;
    if(error){
      errorElement= <p>{error?.message}</p>
      return toast.error('invalid account')
    }

    // set Navigate
    let from = location.state?.from?.pathname || "/";
    if(user){
    navigate(from, { replace: true });
    toast.success(`Log In Successfully Done`, {
      toastId: "success1",
    });
    }

    // Go Home
    const handleGoHome = () => {
      navigate("/");
    };

    // Go Back
    const handleGoBack= () => {
      navigate(-1);
    };

    // Form handler
    const loginFormHandler = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(login.email, login.password)
    .then(()=>{
      emptyInput()
    })
    .catch((error)=>{
      toast.error(error.message)
    })
  }

  // Empty Imput
  const emptyInput =()=>{
    setLogin({
      email:'',
      password:''
    })
  }

    return (
          <div className={styles.Logincontainer}>
          {errorElement}
          <form onSubmit={loginFormHandler} className={styles.loginForm}>
          <div className={styles.LoginHome}>
          <i><BsBack onClick={handleGoBack}/></i>
          <h2 style={{marginBottom:'10px'}}>Login</h2>
          <i><PiDropboxLogoFill onClick={handleGoHome} className={styles.goHome}/></i>
          </div>

          <div className={styles.loginPage}>
          <div className={styles.emailPassInput}>
          <MdOutlineMailOutline />
          <input type="email" onChange={onChangehandle} 
          value={login.email} name="email"
          placeholder="Email or phone number"/>
          </div>
    
          <div onClick={setShowPasswordHandler}  className={styles.emailPassInput}>
          <RiLockPasswordLine/> 
          <input type={showPassword ? 'text':'password'} onChange={onChangehandle}
          value={login.password} name="password"
          placeholder="Password" 
          required/>
          {showPassword ?<BsFillEyeFill />:<BsFillEyeSlashFill /> }
          </div> 
          </div>

          <div className={styles.link}>
          <button type="submit" className={styles.login}>Login</button>
          <SocialLogin/>
          <a href="#" className={styles.forgot}>Forgot password?</a>
          </div>
          <div className={styles.button}>
          <NavLink to='/signup'>Create new account</NavLink>
          </div>
          </form>
          </div>
    );
};

export default Login;