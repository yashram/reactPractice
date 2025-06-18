import { useState } from "react";

import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";
import TabButtons from "./TabButtons.jsx";
import Section from "./Section.jsx";

export default function Examples(){

    const [selectedButton, setSelectedButton] = useState();
    
      function handleSelect(selectedValue){
        setSelectedButton(selectedValue);
    
        }

    return (
        <Section title="Examples" id="examples">
          <Tabs  ButtonsContainer = "menu" buttons={<>  <TabButtons isSelected= {selectedButton === 'component'} onClick = {() => handleSelect('component')}>Components</TabButtons>
                    <TabButtons isSelected= {selectedButton === 'jsx'} onClick = {() => handleSelect('jsx')}>JSX</TabButtons>
                    <TabButtons isSelected= {selectedButton === 'props'} onClick = {() => handleSelect('props')}>Props</TabButtons>
                    <TabButtons isSelected= {selectedButton === 'state'} onClick = {() => handleSelect('state')}>State</TabButtons> </> } >
            {!selectedButton ? 
                  <p>Please select a value</p> : 
                     <div id ="tab-content">
                    <h3>{EXAMPLES[selectedButton].title}</h3>
                     <p>{EXAMPLES[selectedButton].description}</p>
                     <pre>
                      <code>
                              {EXAMPLES[selectedButton].code}
                      </code>
                     </pre>
                  </div>
                  }
          </Tabs>
                  <menu>
                    
                  </menu>
        
                  
                  
                </Section>
    );
}