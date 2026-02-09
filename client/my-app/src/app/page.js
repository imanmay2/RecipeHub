import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <RecipeList/>
    </div>
  );
}