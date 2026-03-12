import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  /* I create an array containing a list of 4 articles, excellent guides for those who want to dedicate themselves to the noble art of dishwashing */
  const defaultArticles = [
    'How to wash dishes efficiently after failing your Boolean course',
    'Top quality dish detergents',
    'How to polish cutlery 101',
    'Optimal floor cleaning techniques'
  ]
  // State that holds the list of articles to read, initialized with the default articles array
  const [toRead, setToRead] = useState(defaultArticles);
  // State that tracks the current value of the new article input field, initialized as empty string
  const [newArticle, setNewArticle] = useState('');

  function handleSubmit(e) {
    e.preventDefault() // Prevents page reload
    setToRead([newArticle, ...toRead]) // Updates state with new article first then the already existing articles
    setNewArticle('') // Resets the input field to the empty string
  }

  return (
    <>
      <div className="formcontainer mx-auto">
        <h1>A list of useful articles about dish washing</h1>
        <ol className="list-unstyled">
          {toRead.map((article) => (
            <li key={article}>{article}</li>
          ))}
        </ol>

        <form onSubmit={handleSubmit}>
          <input type="text"
            value={newArticle}
            onChange={e => setNewArticle(e.target.value)} />
          <button>Add article to read!</button>
        </form>
      </div>
    </>
  )
}

export default App