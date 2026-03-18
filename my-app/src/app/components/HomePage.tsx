
import styles from "./css/Homepage.module.css"
export default function HomePage(){
    return(
        <div className={styles.main}>
            <div className={styles.tag}>Discover Recipes</div><br />
            <div className={styles.quote}>Explore delicious recipes and create your own culinary masterpieces</div>
        </div>
    )
}