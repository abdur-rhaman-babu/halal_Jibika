import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle,useSignInWithGithub } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import Loading from './../Loading/Loading';
import { toast } from "react-toastify";

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
        <div>
            {errorElement}
            <button onClick={()=>signInWithGoogle()}>continue with google</button>
            <button onClick={()=>signInWithGithub()}>continue with githab</button>
        </div>
    );
};

export default SocialLogin;