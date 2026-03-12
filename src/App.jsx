import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  /* I create an array containing a list of articles, excellent guides for those who want to dedicate themselves to the noble art of dishwashing */
  const articles = [
    'How to wash dishes efficiently after failing your Boolean course',
    'Top quality dish detergents',
    'How to polish cutlery 101',
    'Optimal floor cleaning techniques'
  ]


  return (
    <>
      <h1>A list of useful articles about dish washing</h1>
      {articles.map((article) => (
        <ol>
          <li>{article}</li>
        </ol>
      ))}
    </>
  )
}

export default App