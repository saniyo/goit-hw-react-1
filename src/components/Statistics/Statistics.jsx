import PropTypes from 'prop-types';
import { StatItem } from './StatItem';
import styles from './statistics.module.scss';

export const Statistics = ({ title, items }) => {
  const elements = items.map(item => {
    return <StatItem key={item.id} {...item} />;
  });
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.header}>{title}</h2>}
      <ul className={styles.list}>{elements}</ul>
    </section>
  );
};

Statistics.defaultProps = {
  items: {},
};

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percetage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
