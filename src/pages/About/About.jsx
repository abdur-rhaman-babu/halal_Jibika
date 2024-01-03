import styles from "./About.module.css"
const About = () => {
    return (
        <div className={styles.aboutContent}>
        <div className={styles.header}>
           <img src="https://shorturl.at/ipuM5" alt="" />
        </div>

        <div className={styles.aboutOur}>
          <h1>About</h1>
          <p>In Islam, the concept of halal, meaning permissible or lawful, extends beyond dietary restrictions to various aspects of life, including financial transactions and earnings. The notion of halal income is rooted in Islamic principles that emphasize ethical and fair means of earning a living. This article explores the significance of halal income, its principles, and the broader impact it has on the lives of individuals adhering to Islamic principles.</p>
          <button>Show more</button>
        </div>
        <div className={styles.aboutDetails}>
            <div className={styles.aboutText}>

            </div>
            <div className={styles.aboutImg}>

            </div>
        </div>
        </div>
    );
};

export default About;