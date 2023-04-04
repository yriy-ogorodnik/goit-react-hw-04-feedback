import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  
  <div style={button}>
    {options.map((option, index) => (
      <button key={index} onClick={() => onLeaveFeedback(option)} style={btn}>
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

const btn = {
  backgroundColor: 'green',
  borderRadius: '8px',
  color: 'white',
  padding: '15px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '10px',
};

const button = {
  display: 'flex',
  justifyContent: 'center',
};
