import { ConceptProps } from '../../../../data';
import './Concept.css';

export default function Concept({ image, title, description }: ConceptProps) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
