import { useEffect, useState } from "react";
import data from './data'
import questions from "./data";
import Question from './components/Question'


function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <main className="App">
      <div className="wrapper">
        <h3>Questions And Answers About Login</h3>
        <section className="accordition">
          {
            questions.map((question) => (
              <Question key={question.id} {...question}/>
            ))
          }
        </section>
      </div>
    </main>
  );
}

export default App;