import { Search } from 'lucide-react'
import styles from "./css/Homepage.module.css"

export default function HomePage(){
    return(
        <div className={styles.main}> <br />
            <div className={styles.tag}>Discover Recipes</div><br />
            <div className={styles.quote}>Explore delicious recipes and create your own culinary masterpieces</div><br /><br /><br />
            
            {/* Search Section */} 
            <div className={styles.section}>

                <div className={styles.search}>
                    <span><Search/></span>
                    <input type="text" placeholder="Search recipes..." className={styles.inp_}/>
                </div>

                <div className={`${styles.search} ${styles.category}`}>
                    <span>icon</span>
                    
                </div>

                <div className={`${styles.search} ${styles.level}`}>
                    <span>icon</span>
                    
                </div>
            </div>
        </div>
    )
}