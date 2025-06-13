import {CoreConcepts} from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButtons from "./components/TabButtons.jsx";
import { useState } from "react";




function App() {
  const [selectedButton, setSelectedButton] = useState();

  function handleSelect(selectedValue){
    setSelectedButton(selectedValue);

    }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>

            {CoreConcepts.map((item) => <CoreConcept key={item.title} {...item}/> )
            }

              

            
            </ul>

        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons isSelected= {selectedButton === 'component'} onSelect = {() => handleSelect('component')}>Components</TabButtons>
            <TabButtons isSelected= {selectedButton === 'jsx'} onSelect = {() => handleSelect('jsx')}>JSX</TabButtons>
            <TabButtons isSelected= {selectedButton === 'props'} onSelect = {() => handleSelect('props')}>Props</TabButtons>
            <TabButtons isSelected= {selectedButton === 'state'} onSelect = {() => handleSelect('state')}>State</TabButtons>
          </menu>

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
          
        </section>
        
      </main>
    </div>
  );
}

export default App;
