import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [items, setItems] = useState([])
  const api_link = `https://api-mern-test.herokuapp.com/api/items/`

  useEffect(() => {
    const setContent = async () => {
      const fetchedItems = await fetch(api_link)
        .then(res => res.json())
        .catch(error => console.log(error))
      setItems(fetchedItems)
    }
    setContent()
  }, [api_link])

  console.log(`Data from ${api_link}:`)
  console.log(items)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Client of test api</p>
      </header>
      <div className="App-content">
        { (items && items.length > 0) ? items.map(item => (
          <div key={item._id}>
            {item.title}
          </div>
        )) : null }
      </div>
    </div>
  );
}

export default App;
