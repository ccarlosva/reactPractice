import TabButton from "../TabButton/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import Section from "../Section/Section.jsx";
import Tabs from "../Tabs/Tabs.jsx";

export default function Examples() {
  // const stateArray = useState("Please Click a button");
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components','jsx','props','state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        // Will be set by default prop value
        // ButtonsContainer={"menu"}
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {!selectedTopic ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
