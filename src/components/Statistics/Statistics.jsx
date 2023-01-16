import { StatItem } from './StatItem';

export const Statistics = ({ title, items }) => {
  const elements = items.map(item => {
    <StatItem key={item.id} {...items} />;
  });

  console.log(elements);

  return (
    <>
      {title && <div>{title}</div>}
      <ul>{elements}</ul>
    </>
  );
};

Statistics.defaultProps = {
  items: {},
};
