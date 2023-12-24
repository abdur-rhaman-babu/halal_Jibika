import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
const GithabAuth = () => {
    const provider = new GoogleAuthProvider();
    const [user, setuser] = useState(null)
    const githabLoginHandler =()=>{
      signInWithPopup( provider)
      .then((res)=>{
        console.log(res.user);
        setuser(res.user)})
      .catch((error)=>console.log(error.message))
    }
  
    return (
      <div>
        <h1>{user?.displayName}</h1>
        <h2>{user?.email}</h2>
        <img src={user?.photoURL} alt="" />
        <button onClick={githabLoginHandler}>continue with githab</button>
      </div>
    );
};

export default GithabAuth;