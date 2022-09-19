import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link href="#"><a>Skills</a></Link></li>
                    <li><Link href="#"><a>Proyects</a></Link></li>
                    <li><Link href="#"><a>Contact</a></Link></li>
                </ul>
            </nav>
            <header className={styles.header}>
                <div className={styles.placard}>
                    <h2>Hi! I am Juan Beresiarte.</h2>
                    <span>I am a full stack developer with Javascript and Php.</span>
                </div>
                <div className={styles.avion}>
                    <i className="fa-regular fa-paper-plane"></i>
                </div>
            </header>
            <div className={styles.more}>
                <i className="fa-solid fa-angles-down"></i>
            </div>
            <main className={styles.main}>
                <section className={styles.collection}>
                    <h3>
                        Skills <i className="fa-solid fa-meteor"></i>
                    </h3>
                    <div className={styles.skills}>
                        <div className={styles.skill}>
                            <i className="fa-brands fa-node-js"></i>
                            <span>NodeJS</span>
                        </div>
                        <div className={styles.skill}>
                            <i className="fa-brands fa-envira"></i>
                            <span>Mongo</span>
                        </div>
                        <div className={styles.skill}>
                            <i className="fa-brands fa-react"></i>
                            <span>React</span>
                        </div>
                        <div className={styles.skill}>
                            <i className="fa-brands fa-neos"></i>
                            <span>NextJS</span>
                        </div>
                        <div className={styles.skill}>
                            <i className="fa-brands fa-php"></i>
                            <span>Php</span>
                        </div>
                        <div className={styles.skill}>
                            <i className="fa-brands fa-laravel"></i>
                            <span>Laravel</span>
                        </div>
                        <div className={styles.skill}>
                            <i className="fa-solid fa-database"></i>
                            <span>SQL</span>
                        </div>
                    </div>
                </section>
            </main>
            <script src="https://kit.fontawesome.com/a5c1628c0a.js" crossorigin="anonymous"></script>
        </div>
    )
}
