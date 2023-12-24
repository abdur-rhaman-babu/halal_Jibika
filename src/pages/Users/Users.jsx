import { useLoaderData } from "react-router-dom";
import User from "./User";
import styles from "./users.module.css";
const Users = () => {
    const users = useLoaderData()
    console.log(users);
    return (
        <div className={styles.mainContent}>
            {
                users && users.map((user)=><User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;