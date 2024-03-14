import "./CoreConcept.css";

// This can be destructured -> function CoreConcept({image, title,description}) but the names must match!!
//  <img src= {image} />
export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
