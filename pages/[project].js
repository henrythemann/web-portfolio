import { useRouter } from 'next/router';
import { data } from '../data/data.js';
import styles from '../styles/portfolio.module.css';
import { Fragment } from 'react';

const ProjectPage = ({ projectData }) => {
    const router = useRouter();
    if (router.isFallback) {styles
        return <div>Loading...</div>; // Or any loading state
    }

    const openImage = () => {

    }

    // styles.thumb.style.backgroundImage = 'url(img/'+projectData+'.webp)';
    
    return (
        <>
        <div id={styles.greyOverlay}></div>
        <div id={styles.imgOverlay}>
            <div id={styles.imgContainer}>
            <span></span>
            </div>
        </div>
        <div id={styles.windowBorder}></div>
        <div id={styles.projectTitle}>
        <a href={projectData.url || undefined} target={projectData.url ? "_blank" : undefined} rel={projectData.url ? "noopener noreferrer" : undefined}>{projectData.project}</a>
        </div>
        <div id={styles.tags}>
            {projectData.tags.map((tag, idx) => (<Fragment key={idx}>
                {idx !== 0 && (<span className={styles.separator}>|</span>)}<span>{tag}</span>
            </Fragment>))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.description }} id={styles.projectDescription}></div>
        </>
    );
};

export async function getStaticPaths() {
    // Fetch or generate the list of project keys
    const paths = Object.keys(data).map(projectKey => ({
        params: { project: projectKey },
    }));
    
    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    // Fetch the project data for a given project key
    let projectData = data[params.project];
    projectData.key = params.project;
    
    return { props: { projectData } };
}

export default ProjectPage;
