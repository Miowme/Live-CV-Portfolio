import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';
export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" className={styles.image}/>
          <a href="williamsusantolukman@gmail.com">williamsusantolukman@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" className={styles.image}/>
          <a href="https://www.linkedin.com/in/william-susanto-lukman/">linkedin.com/in/william-susanto-lukman</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" className={styles.image}/>
          <a href="https://github.com/Miowme">github.com/Miowme</a>
        </li>
      </ul>
    </footer>
  )
}
