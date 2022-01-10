import "./styles.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import ReactIcon from "./images/react-icon.png";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <img src={ReactIcon} alt="React Icon" />
    </div>
  );
}
