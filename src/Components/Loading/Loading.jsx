
import  styles  from './Loading.module.css'
const Loading = () => {
    return (
        <div className={styles.loadingContent}>
      <div className={styles.loadingSpinner}></div>
      <div><h2>Loading...</h2></div>
    </div>
    );
};

export default Loading;