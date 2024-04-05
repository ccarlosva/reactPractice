import CoreConcept from "../CoreConcept/CoreConcept.jsx";
import Section from "../Section/Section.jsx";
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}

//   {/* Manually Exports the information out of Core Concept Object
//   <CoreConcept
//     title={CORE_CONCEPTS[0].title}
//     description={CORE_CONCEPTS[0].description}
//     image={CORE_CONCEPTS[0].image}
//   />
//   <CoreConcept
//     title={CORE_CONCEPTS[1].title}
//     description={CORE_CONCEPTS[1].description}
//     image={CORE_CONCEPTS[1].image}
//   />
//   {/* Manually Exports the ALL information out of Core Concept Object }
//   <CoreConcept {...CORE_CONCEPTS[2]} />
//   <CoreConcept {...CORE_CONCEPTS[3]} /> */}
