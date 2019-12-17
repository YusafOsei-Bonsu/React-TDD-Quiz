import React from 'react';
import '../App.css';
import Quiz from '../containers/quiz';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'; 
import Start from '../components/start';
import Form from '../components/form';
import Results from './results';

class App extends React.Component {
  state = {
    response_code: 0,
    results: [
    {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "What is the airspeed velocity of an unladen swallow?",
    correct_answer: "24 MPH",
    incorrect_answers: [
    "15 MPH",
    "20 MPH",
    "200 MPH"
    ]
    },
    {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following Ivy League universities has its official motto in Hebrew as well as in Latin?",
    correct_answer: "Yale University",
    incorrect_answers: [
    "Princeton University",
    "Harvard University",
    "Columbia University"
    ]
    },
    {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Which film star has his statue in Leicester Square?",
    correct_answer: "Charlie Chaplin",
    incorrect_answers: [
    "Paul Newman",
    "Rowan Atkinson ",
    "Alfred Hitchcock"
    ]
    },
    {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the Spanish word for &quot;donkey&quot;?",
    correct_answer: "Burro",
    incorrect_answers: [
    "Caballo",
    "Toro",
    "Perro"
    ]
    },
    {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following languages does NOT use gender as a part of its grammar?",
    correct_answer: "Turkish",
    incorrect_answers: [
    "German",
    "Danish",
    "Polish"
    ]
    },
    {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What was Mountain Dew&#039;s original slogan?",
    correct_answer: "Yahoo! Mountain Dew... It&#039;ll tickle your innards!",
    incorrect_answers: [
    "Give Me A Dew",
    "Do The Dew",
    "Get&#039; that barefoot feelin&#039; drinkin&#039; Mountain Dew"
    ]
    },
    {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What color is the &quot;Ex&quot; in FedEx Ground?",
    correct_answer: "Green",
    incorrect_answers: [
    "Red",
    "Light Blue",
    "Orange"
    ]
    },
    {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which sign of the zodiac comes between Virgo and Scorpio?",
    correct_answer: "Libra",
    incorrect_answers: [
    "Gemini",
    "Taurus",
    "Capricorn"
    ]
    },
    {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Originally another word for poppy, coquelicot is a shade of what?",
    correct_answer: "Red",
    incorrect_answers: [
    "Green",
    "Blue",
    "Pink"
    ]
    },
    {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the currency of Poland?",
    correct_answer: "Złoty",
    incorrect_answers: [
    "Ruble",
    "Euro",
    "Krone"
    ]
    }
    ]
    }
  
  render() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Start/>
        </Route>
        <Route exact path='/form'>
          <Form/>
        </Route>
        <Route path='/quiz'>
          <Quiz results={this.state.results} />
        </Route>
        <Route path='/results'>
          <Results />
        </Route>
      </Switch>
    </Router>
  );}
}

export default App;
