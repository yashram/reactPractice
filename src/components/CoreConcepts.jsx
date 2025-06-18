import CoreConcept from "./CoreConcept.jsx";
import {CORECONCEPTS} from "../data.js";
import Section from "./Section.jsx";

export default function CoreConcepts() {
    return (

        <Section title = "Core Concepts" id="core-concepts">
                  <ul>
        
                    {CORECONCEPTS.map((item) => <CoreConcept key={item.title} {...item}/> )
                    }
        
                </ul>
        
                </Section>
    
);
}