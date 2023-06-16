import React, { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions  from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App  extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  } 

  heandleIncrement = (e) =>{
    console.log('Entró')
    e.preventDefault();
    const feedBack = e.target.textContent;
    if(feedBack === 'Good'){
      this.setState(prevState =>{
       return {good: prevState.good + 1}
      })
    }else{
      if(feedBack === 'Neutral'){
        this.setState(prevState => {
          return {neutral: prevState.neutral + 1}
        })
      }else{
        this.setState(prevState => {
          return {bad: prevState.bad + 1}
        })
      }
    }
    
  }

  countTotalFeedback(){
    const state = this.state;
    const total = state.bad + state.good + state.neutral;
    return total;
  }

  countPositiveFeedbackPercentage(){
    let prom = 0;
    if(this.countTotalFeedback() !== 0){
      prom = this.state.good / this.countTotalFeedback()*100;
    }
    return Math.round(prom);
  }

  render(){   
    return (
      <div
        style={{
          height: '100vh',
          //display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >         
        <Section tittle="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.heandleIncrement}/>       
       </Section>
        <Section tittle="Statistics">
          {this.countTotalFeedback() !== 0 ? (
              <Statistics good={this.state.good} bad={this.state.bad} neutral={this.state.neutral} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>       
            ):(
              <Notification message={'There is no feedback'}/>
            )
          }          
        </Section>      
      </div>
    );
  }
  
};

export default App;