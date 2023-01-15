import styles from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <>
            <section>
                {title && <h2 className={styles.titleStyle}> {title}</h2>}
                {children}
            </section>
        </>
    );
};

Section.PropTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
};