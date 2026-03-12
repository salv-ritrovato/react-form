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

    if (newArticle.length < 5) {
      alert('Invalid input!!')
    } else {
      setToRead([newArticle, ...toRead]) // Updates state with new article first then the already existing articles
      setNewArticle('') // Resets the input field to the empty string
    }
  }

  function removeArticle(i) {
    const newList = toRead.filter((item, newIndex) => newIndex != i)
    setToRead(newList)
  }

  return (
    <>
      <div className="container mx-auto bg-light border p-3 mt-5">
        <h1 className="">A list of useful articles about dish washing</h1>
        <ol className="list-unstyled">
          {toRead.map((article, index) => (
            <li key={index} className="mb-3 border p-3 text-dark bg-white d-flex justify-content-between">
              {article}
              <button onClick={() => removeArticle(index)} className="btn btn-danger btn-sm mx-4">Remove</button>
            </li>

          ))}
        </ol>

        <form onSubmit={handleSubmit}>
          <input type="text"
            value={newArticle}
            onChange={e => setNewArticle(e.target.value)} />
          <button className="btn btn-primary mx-3 p-2">Add article to read!</button>
        </form>
      </div>
    </>
  )
}

export default App