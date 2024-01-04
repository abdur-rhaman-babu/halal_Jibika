import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../../Components/Loading/Loading";
import styles from "./Mainlayout.module.css";
const Mainlayout = () => {

    const navigation = useNavigation()
    // console.log(navigation);
    return (
        <div>
            <Header/>
            <div className={styles.mainlayoutSection}>
            {
            navigation.state === "loading" ? <Loading/> :<Outlet/>  
            }
            </div>
            <Footer/>
        </div>
    );
};

export default Mainlayout;