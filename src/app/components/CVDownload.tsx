import React from 'react';
import styles from '../styles/CVDownload.module.css';


const CVDownload: React.FC = () => {
  const wordUrl = '/cv/CV Eliyahu.pdf';
   return (
    <div className={styles.cvDownloadContainer}>
        <a href={wordUrl} download className={styles.cvDownloadButton}>
            <span className={styles.buttonText}>Download my CV</span>
            <svg className={styles.downloadIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm3.5 7a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5zm3 0a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5zm3 0a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5z"/>
            </svg>
        </a>
    </div>
    );
  };

export default CVDownload;