"use client"
import { ArrowLeft, Upload } from 'lucide-react';
import styles from "./css/AddRecipe.module.css"
export default function AddRecipe() {
    return (
        <div className={styles.main}>
            <div className={styles.backToRecipe}><ArrowLeft /><span>Back to Recipe</span></div> <br /><br />
            <div className={styles.add}>
                Add New Recipe <br />
                <span className={styles.quote}>Share your culinary creation with the community</span>
            </div><br />

            <br />

            <div className={styles.info}>

                <div className={styles.heading_1}>
                    <span className={styles.vertical_line}></span>
                    <span className={styles.size}>Basic Information</span>
                </div>

                <br />
                <br />
                <label htmlFor="name">Recipe Name</label>
                <input className={styles.inp_} type="text" placeholder='Enter the recipe name' id="name" name='recipe_name' />
                <br />
                <div className={styles.category_difficulty}>
                    <div>
                        <label htmlFor="Category">Category</label><br />
                        <button className={styles.category}>Select Category</button>
                    </div>

                    <div>
                        <label htmlFor="Category">Difficulty</label><br />
                        <button className={styles.category}>Select Difficulty</button>
                    </div>
                </div>
                <br /><br />
                <div className={styles.heading_1}>
                        <span className={styles.vertical_line}></span>
                        <span className={styles.size}>Cooking Details</span>
                    </div>
                    <br /><br />
                <div className={styles.details}>
                    
                    
                    <div className={styles.cooking_details}>
                        <label htmlFor="category">Prep Time (mins)</label><br />
                        <input className={styles.inp_} type="text" placeholder='15' id="category" name='prep_time' />
                    </div>

                    <div className={styles.cooking_details}>
                        <label htmlFor="category">Cook Time (mins)</label><br />
                        <input className={styles.inp_} type="text" placeholder='30' id="category" name='cook_time' />
                    </div>

                    <div className={styles.cooking_details}>
                        <label htmlFor="category">Servings</label><br />
                        <input className={styles.inp_} type="text" placeholder='4' id="category" name='servings' />
                    </div>
                </div><br />

                 <div className={styles.recipe_image}>
                        Recipe Image <br /><br />
                        <div className={styles.drop_image}>
                            <Upload size={38}/>
                            <span>Click to upload image </span>
                            <span className={styles.small_size}> PNG,JPG upto 10MB</span>
                        </div>
                    </div>
            </div>
        </div>
    )
}