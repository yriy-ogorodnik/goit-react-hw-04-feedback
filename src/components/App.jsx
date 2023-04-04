import Notification from './Notification/Notification';

import Section from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { useState } from 'react';

const App = () => {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const countTotalFeedback = () => {
    let total = good + neutral + bad;

    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  const onLeaveFeedback = e => {
    if (e === 'Good') {
      setgood(good + 1);
    } else if (e === 'Neutral') {
      setneutral(neutral + 1);
    } else if (e === 'Bad') {
      setbad(bad + 1);
    }
  };

  return (
    <div style={wrapperStyle}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};

export default App;

// стилі---------------------------
const wrapperStyle = {
  display: 'flex',
  width: '1200px',
  margin: '0 auto',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};
