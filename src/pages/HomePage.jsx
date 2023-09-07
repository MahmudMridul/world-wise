import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import { PageNav } from '../components/PageNav';


export const HomePage = () => {
    return (
        <main className={styles.homepage} style={{backgroundImage: "linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url(/bg.jpg)"}}>
            <PageNav/>
            <section>
                <h1>
                    You travel the world.
                    <br />
                    WorldWise keeps track of your adventures.
                </h1>
                <h2>
                    A world map that tracks your footsteps into every city you can think
                    of. Never forget your wonderful experiences, and show your friends how
                    you have wandered the world.
                </h2>
                <Link to="/app" className="cta">
                    Start Tracking Now  
                </Link>
            </section>
        </main>
    );
}