'use client';
import React from 'react';
import styles from '../styles/CVDownload.module.css';



const CVDownload = () => {
   const fileUrl = '/Eliyahu_CV.docx';

   return(
    <div className={styles.cv}>
        <h2>CV</h2>
        <a href={fileUrl} download = "eliyahu_cv.pdf">
            <button className={styles.downloadButton}>Download CV</button>
        </a>
    </div>)
  };

export default CVDownload;