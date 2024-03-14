import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  let rand = Math.floor(Math.random() * max);
  return reactDescriptions[rand];
}

export default function Header() {
  const description = genRandomInt(reactDescriptions.length);
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
