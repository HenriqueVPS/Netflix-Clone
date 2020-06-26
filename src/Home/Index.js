import React from 'react'

import styles from './home.module.css'

import logo from '../assets/images/logo_netflix.png'
import video from '../assets/video/arrow.mp4'

import { FaSearch, FaGift, FaBell, FaPlay, FaPlus, FaPlusCircle } from 'react-icons/fa'

export default function Index() {
    return (
        <div className={styles.body}>
            <header className={styles.header}>
                <div className={styles.center}>
                    <div className={styles.headerLeft}>
                        <a href="/">
                            <img src={logo} alt="logo netflix"/>
                        </a>
                            <div className={styles.menuHeader}>
                                <ul>
                                    <li><a href="/">Início</a></li>
                                    <li><a href="/">Séries</a></li>
                                    <li><a href="/">Filmes</a></li>
                                    <li><a href="/">Adicionados recentemente</a></li>
                                    <li><a href="/">Minha lista</a></li>
                                </ul>
                            </div>
                        
                    </div>

                    <div className={styles.headerRight}>
                       <FaSearch className={styles.search}/>
                       <a href="/" className={styles.classInfantil}>Infantil</a>
                       <FaGift className={styles.gift}/>
                        <FaBell className={styles.bell}/>                
                    </div>

                    <div className={styles.clear}></div>
                </div>
            </header>
            <section className={styles.destaque}>

            <video 
                src={video}
                autoPlay
                muted
                loop
                className={styles.videoDestaque}
            >

            </video>

                <div className={styles.overlay}></div>
                <div className={styles.textDestaque}>
                    <h2>Arrow</h2>
                    <h3>Assistir próxima temporada!</h3>
                    <p>Descrição completa da série ou filme.</p>
                    <br/>
                    <a href="/"><FaPlay className={styles.icons}/> Assistir</a>
                    <a href="/"><FaPlus className={styles.icons}/> Minha lista</a>
                    <a href="/"><FaPlusCircle className={styles.icons}/> Mais informações</a>
                </div>
            </section>

                <div className={styles.vitrineFlex}>
                    <div className={styles.bannerOne}></div>
                    <div className={styles.bannerTwo}></div>
                    <div className={styles.bannerOne}></div>
                    <div className={styles.bannerTwo}></div>
                    <div className={styles.bannerOne}></div>
                    <div className={styles.bannerTwo}></div>       
                </div>
        </div>
    )
}
