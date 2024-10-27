import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}> 
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm William Susanto</h1>
        <p className={styles.description}>
          I am a Data Science and Website Developer enthusiast. Reach out if you'd like to learn more.
        </p>
        <a href="https://drive.google.com/file/d/1f_KXkoERV4OcXK8WVqt-o2NqrGTRP94n/view" className={styles.contactBtn}>Download CV</a>
      </div>
      <img src={getImageUrl('hero/heroimage.jpg')} alt="Pas Foto" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  )
}
