import './App.css';

function App() {
  const title = 'welcome to the new blog';
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Likes { likes } times</p>

        <p>{10}</p>
        <p>{'hello !'}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
