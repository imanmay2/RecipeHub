"use client"

import { ArrowLeft } from 'lucide-react';
import styles from "./css/AddRecipe.module.css"
export default function AddRecipe(){
    
    return (
        <div className={styles.main}>
            <div className={styles.backToRecipe}><ArrowLeft/><span>Back to Recipe</span></div> <br /><br />
            <div className={styles.add}>
                Add New Recipe <br />
                <span className={styles.quote}>Share your culinary creation with the community</span>
            </div><br />

            <br />

            <div className={styles.info}>
               <h2>Basic Information</h2> <br />

               <label htmlFor="name">Recipe Name</label><br />
               <input className={styles.inp_} type="text" placeholder='Enter the recipe name' id="name"/>


            </div>
        </div>
    )
}