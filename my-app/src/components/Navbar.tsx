"use client"
import styles from "./css/Navbar.module.css"
import { ChefHat, Plus, Heart } from "lucide-react"
import { useRouter } from "next/navigation"
export default function Navbar() {
    const router=useRouter();
    return (
        <div className={styles.main}>
            {/* Left Section */}
            <div className={styles.leftNav}>
                <ChefHat size={38} strokeWidth={2} className={styles.recipeHat}/> <div id={styles.recipeHub}>RecipeHub</div>
            </div>

            {/* Right Nav */}
            <div className={styles.rightNav}>
                <button className={styles.navItem} onClick={()=>router.push("/")}> <ChefHat/><div>Home</div></button>
                <button className={styles.navItem}  onClick={()=>router.push("/addrecipe")}><Plus/><div>Add Recipe</div></button>
                <button className={styles.navItem} onClick={()=>router.push("/favorites")}><Heart/><div>Favorites</div></button>
            </div>
        </div>
    )
}