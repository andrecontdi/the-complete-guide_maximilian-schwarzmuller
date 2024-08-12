import { CORE_CONCEPTS, ConceptProps } from '../../../data';
import Section from '../../Section';
import Concept from './Concept/Concept';
import './CoreConcepts.css';

export default function CoreConcepts() {
  const concepts = CORE_CONCEPTS.map((coreConcept: ConceptProps) => (
    // Long alternative
    // <CoreConcept key={coreConcept.title} image={coreConcept.image} title={coreConcept.title} description={coreConcept.description} />
    // Short alternative with spread operator
    <Concept key={coreConcept.title} {...coreConcept} />
    // The above approach (pass multiple properties) makes sense if you got multiple smaller pieces of information that must be passes to a component.
  ));

  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>{concepts}</ul>
    </Section>
  );
}
