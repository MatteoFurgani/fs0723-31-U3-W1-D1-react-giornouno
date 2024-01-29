import logo from "./logo.svg";
import "./App.css";
// IMPORTO ButtonComponent e ImageComponent
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*inserisco ButtonComponent e ImageComponent in un TAG
          all'interno della funzione App
          per applicare la funzione/classe creata*/}
        <ButtonComponent
          buttonText="Premi qui!"
          bgColor="red"
          textcolor="yellow"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ImageComponent imageSrc="https://placedog.net/400" imageAlt="cane" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
