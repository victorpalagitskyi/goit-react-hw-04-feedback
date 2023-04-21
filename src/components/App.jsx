
import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/statistics";
import {Notification } from "./Notification/Notification"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleClickIncrement = (type) =>
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }))
  countTotalFeedback() {
    return this.state.bad + this.state.good + this.state.neutral
  }
  countPositiveFeedbackPercentage() {
    return (this.state.good / this.countTotalFeedback()) * 100
  }
  
  render() {

    const { good, bad, neutral } = this.state

    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section title="Please Leave Feedback" >
          <FeedbackOptions handleClickIncrement={this.handleClickIncrement} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (<Notification message="There is no feedback" />) : (
            <Statistics
              bad={bad}
              good={good}
              neutral={neutral}
              total={this.countTotalFeedback()}
              percent={this.countPositiveFeedbackPercentage()}
            />)}
        </Section>
      </div>
    );
  }
}

export default App