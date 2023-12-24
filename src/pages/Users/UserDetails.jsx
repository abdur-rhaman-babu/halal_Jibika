import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const {name,id,username}= useLoaderData()
    return (
        <div>
            <h1>{name}</h1>
            <h1>{id}</h1>
            <h1>{username}</h1>
        </div>
    );
};

export default UserDetails;