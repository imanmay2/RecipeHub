"use client"

import { Search,SlidersHorizontal,BarChart3, Divide } from 'lucide-react'
import styles from "./css/Homepage.module.css"
import { useState } from 'react'

export default function HomePage(){
    let [open1,setOpen1]=useState<boolean>(false);
    let [open2,setOpen2]=useState<boolean>(false);
    //fetch the list of categories from the database
    let [categories,setCategories]=useState<Array<string>>(["Breakfast","Lunch","Dinner"]);
    let [levels,setLevels]=useState<Array<string>>(["Easy","Medium","Difficult"]);
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
                    <button onClick={(e)=>{setOpen1(true)}} className={styles.btn_}><span><SlidersHorizontal/></span><span>Categories</span></button>
                    {open1 && (<div className={styles.category_Overlay}>
                        <div className={styles.modal} onClick={()=>{setOpen1(false)}}>
                            Categories
                            {categories.map((i,index)=>(
                                <p className={styles.list_categories} key={index}>&nbsp;&nbsp;&nbsp;{i}</p>
                            ))}
                        </div>
                    </div>)}
                </div>

                <div className={`${styles.search} ${styles.level}`}>
                    <button className={styles.btn_} onClick={()=>{setOpen2(true)}}><span><BarChart3/></span><span>All Levels</span></button>
                    {open2 && (<div className={styles.level_Overlay}>
                        <div className={styles.modal} onClick={()=>{setOpen2(false)}}>
                            Levels
                            {levels.map((i,index)=>(
                                <p className={styles.list_categories} key={index}>&nbsp;&nbsp;&nbsp;{i}</p>
                            ))}
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}