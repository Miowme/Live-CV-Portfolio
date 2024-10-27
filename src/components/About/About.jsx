import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl('about/aboutImg.jpg')} alt="Active Organization BNCC" className={styles.aboutImages}/>
      
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl('about/cursorIcon.png')} alt="Cursor Icon" className={styles.aboutImage}/>
          <div className={styles.aboutItemText}>
            <h3>Front End Developer</h3>
            <p>
              I'm a front-end developer with experience in building responsive websites that focus on user experience
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl('about/dataIcon.png')} alt="Data Icon" className={styles.aboutImage}/>
          <div className={styles.aboutItemText}>
            <h3>Data Analyst</h3>
            <p>
            I'm a data analyst with experience in querying, analyzing data, and creating data stories to help drive insights and busines decisions
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl('about/machineIcon.png')} alt="Machine Learning Icon" className={styles.aboutImage}/>
          <div className={styles.aboutItemText}>
            <h3>Data Science Enthusiast</h3>
            <p>
            I'm a data science enthusiast with experience in data preprocessing, exploratory data analysis, building models, and evaluating model performance to uncover insights and make informed decisions
            </p>
          </div>
        </li>
      </ul>
      </div>
    </section>
  )
}
