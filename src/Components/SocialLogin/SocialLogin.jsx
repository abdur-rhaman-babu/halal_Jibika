import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle,useSignInWithGithub } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import Loading from './../Loading/Loading';
import { toast } from "react-toastify";
import styles from "./SocialLogin.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
    const [signInWithGoogle, googleuser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githabuser, githabLoading, githabError] = useSignInWithGithub(auth);
    const navigate = useNavigate()

    if(googleLoading ||githabLoading){
        return <Loading></Loading>
    }

    let errorElement;
    if(googleError || githabError){
        return <p>{googleError.message}{githabError.message}</p>
    }

    if(googleuser || githabuser){
        navigate("/");
        toast.success(`Log In Successfully`,{
          toastId: "success1",
        });
    }

    return (
        <div className={styles.socialLogin}>
            {errorElement}
            <div className={styles.googleBtn}><FcGoogle /><button onClick={()=>signInWithGoogle()}>continue with google</button> </div>
            <div className={styles.githubBtn}><FaGithub /><button onClick={()=>signInWithGithub()}>continue with github</button></div>
            
        </div>
    );
};

export default SocialLogin;