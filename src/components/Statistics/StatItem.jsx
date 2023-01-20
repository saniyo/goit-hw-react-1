import PropTypes from 'prop-types';
import styles from './statistics.module.scss';

export const StatItem = ({ label, percentage }) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
      return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return padZero(r) + padZero(g) + padZero(b);
  }

  function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  }

  const invertedColor = invertColor(randomColor, false);

  return (
    <li style={{ backgroundColor: `#${randomColor}` }} className={styles.item}>
      <span className={styles.label} style={{ color: `#${invertedColor}` }}>
        {label}
      </span>
      <span
        className={styles.percentage}
        style={{ color: `#${invertedColor}` }}
      >
        {percentage}%
      </span>
    </li>
  );
};

StatItem.propTypes = { 
  label: PropTypes.string.isRequired, 
  percentage: PropTypes.number.isRequired,
 };
