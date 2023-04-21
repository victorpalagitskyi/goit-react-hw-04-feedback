
import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/statistics";
import {Notification } from "./Notification/Notification"




export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (e) => { 
    console.log(e.target.name)
    if (e.target.name === 'good') { 
      setGood(good + 1)
    } else if (e.target.name === 'neutral') { 
      setNeutral(neutral + 1)
    }
      else if (e.target.name === 'bad') { 
      setBad(bad + 1)
    }
  }
  function countTotalFeedback() {
    const total = bad + good + neutral
    return total
  }
 function countPositiveFeedbackPercentage() {
    return (good /countTotalFeedback()) * 100
  }

    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section title="Please Leave Feedback" >
          <FeedbackOptions handleClick={handleClick} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (<Notification message="There is no feedback" />) : (
            <Statistics
              bad={bad}
              good={good}
              neutral={neutral}
              total={countTotalFeedback()}
              percent={countPositiveFeedbackPercentage()}
            />)}
        </Section>
      </div>
    );
  }


export default App