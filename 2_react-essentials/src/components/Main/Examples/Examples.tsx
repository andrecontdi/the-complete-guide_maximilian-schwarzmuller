import { useState } from 'react';
import { CORE_CONCEPTS, ConceptProps, EXAMPLES } from '../../../data';
import Section from '../../Section';
import Tab from '../../Tabs/Tab/Tab';
import Tabs from '../../Tabs/Tabs';
import './Examples.css';

export default function Examples() {
  // useState is a React Hook. It will allow us to manage component state, which when change will trigger a re-evaluation of the component (re-rendering).
  // Only call Hooks inside of Component Functions.
  // Only call Hooks on the top level of the component function.
  const [selectedTab, setSelectedTab] = useState('');

  const handleSelect = (selectedTab: string) => {
    setSelectedTab(selectedTab);
  };

  const isSelectedTab = (coreConcetTitle: string): boolean => {
    return coreConcetTitle === selectedTab;
  };

  const menu = CORE_CONCEPTS.map((coreConcept: ConceptProps) => (
    <Tab
      isSelected={isSelectedTab(coreConcept.title)}
      key={coreConcept.title}
      onClick={() => handleSelect(coreConcept.title)}>
      {/* Children Prop: For components that take a single piece of renderable content. This approach is especially
      conveninet when passing JSX code as a value to another component */}
      {coreConcept.title}
    </Tab>
  ));

  return (
    <Section title="Examples" id="examples">
      <Tabs menu={menu} MenuContainer="menu">
        {!selectedTab && <p>Please select a tab </p>}
        {selectedTab && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTab.toLowerCase()].title}</h3>
            <p>{EXAMPLES[selectedTab.toLowerCase()].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTab.toLowerCase()].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
