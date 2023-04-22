import PropTypes from 'prop-types';
import {StatSection, StatList, StatCard, StatLabel, StatPerc} from './Statistics.styled';

export const Statistics = ({ title, data }) => {
    return (
      <StatSection>
        {title && <h2>{title}</h2>}
        <StatList>
          {data.map(({ label, percentage, id }) => {
            return (
              <StatCard key={id} prop={label}>
                <StatLabel>{label}</StatLabel>
                <StatPerc>{percentage}%</StatPerc>
              </StatCard>
            );
          })}
        </StatList>
      </StatSection>
    );
  };
 
  Statistics.propTypes = {
    title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
