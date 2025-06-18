import styles from '../styles/Experience.module.css';

const Experience: React.FC = () => {
    return (
        <div className={styles.experience}>
            <div className={styles.header}>
                <h2 className={styles.title}>Software Engineer <span className={styles.separator}>|</span> Bresleveloper Digital</h2>
                <div className={styles.dates}>Dec. 2024 – Present</div>
            </div>
            <ul className={styles.achievements}>
                <li>
                    Developed and maintained RESTful APIs using <b>C# (.NET Web API)</b> and <b>SQL</b>, while building responsive frontend interfaces with Angular for a seamless user experience.
                </li>
                <li>
                    Refactored critical modules in the codebase, reducing loading/rendering times by up to <b>85%</b>, significantly improving customer satisfaction.
                </li>
                <li>
                    Led a team of <b>2-3 developers</b>, establishing new workflows for task management and project tracking—boosting delivery consistency and internal communication.
                </li>
                <li>
                    Solved major performance bottlenecks, such as reducing report generation time from <b>40 seconds to 1 second</b> by converting blocking logic into asynchronous operations.
                </li>
                <li>
                    Took full ownership over features from design to deployment; built key components of the system from scratch, making the product fully usable by external clients.
                </li>
                <li>
                    Maintained direct communication with customers, presented new features, gathered feedback, and iteratively improved the product during real-time implementation.
                </li>
            </ul>
        </div>
    );
}

export default Experience; 