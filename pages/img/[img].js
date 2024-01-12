import { useRouter } from 'next/router';
import { data } from '../../data/data.js';
import styles from '../../styles/portfolio.module.css';

const ImagePage = ({ image }) => {
    const router = useRouter();
    if (router.isFallback) {styles
        return <div>Loading...</div>; // Or any loading state
    }

    return (
        <img className={styles.imageFullsize} src={`../img/${image.key}.webp`} alt={image.project} />
    );
};

export async function getStaticPaths() {
    // Fetch or generate the list of project keys
    const paths = Object.keys(data).map(projectKey => ({
        params: { img: projectKey },
    }));
    
    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    // Fetch the project data for a given project key
    let image = {};
    try {
        image = {key: params.img};
    } catch (e) {
        return { notFound: true };
    }
    
    return { props: { image } };
}

export default ImagePage;
