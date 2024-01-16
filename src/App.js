import logo2 from "./logo2.jpg";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">  
      <div className="container">
       <header className="App-header">
        <img src={logo2} className="App-logo img-fluid"
          alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="wine"/>
          </main>
        <footer className="App-footer">
          This project was coded by Tia Ferguson and is <a href="https://scintillating-tapioca-f87bb6.netlify.app/">open-sourced</a> on Github
        </footer>
      </div>  
    </div>
  );
}

