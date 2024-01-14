import { useRouter } from 'next/router';
import { data } from '../data/data.js';
import Link from 'next/link'; 
import styles from '../styles/portfolio.module.css';
import { Fragment } from 'react';

const ProjectPage = ({ projectData }) => {
    const router = useRouter();
    if (router.isFallback) {styles
        return <div>Loading...</div>; // Or any loading state
    }

    const openImage = () => {

    }

    return (
        <>
        <div id={styles.windowBorder}></div>
        <div id={styles.projectTitle}>
            <a href={projectData.url || undefined} className={projectData.url ? styles.projectLink : undefined} target={projectData.url ? "_blank" : undefined} rel={projectData.url ? "noopener noreferrer" : undefined}>{projectData.project}</a>
        </div>
        <div id={styles.tags}>
            {projectData.tags.map((tag, idx) => (<Fragment key={idx}>
                {idx !== 0 && (<span className={styles.separator}>|</span>)}<span>{tag}</span>
            </Fragment>))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.description }} id={styles.projectDescription}></div>
        <div id={styles.projectImage}>
            <Link href={`/img/${projectData.key}`}><img onClick={openImage} src={`img/${projectData.key}.webp`} alt={projectData.project} /></Link>
            {projectData.url && (<a id={styles.visitSite} href={projectData.url} target="_blank" rel="noopener noreferrer">visit site</a>)}
        </div>
        {projectData.links && 
        <div className={styles.linksContainer}>
            <span>links</span>
            <span className={styles.linksDivider}></span>
            <span className={styles.linksList}>
                {projectData.links.map((item, idx) => (<Fragment key={idx}>{idx === 0 && <span className={styles.linksSpacer}></span>}<br></br><Link href={item.link}>{item.title}</Link></Fragment>))}
            </span>
        </div>}
        <div id={styles.footer}></div>
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
    let projectData = {};
    try {
        projectData = data[params.project];
        projectData.key = params.project;
    } catch (e) {
        return { notFound: true };
    }
    
    return { props: { projectData } };
}

export default ProjectPage;
