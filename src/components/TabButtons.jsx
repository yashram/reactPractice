export default function TabButtons(props){

    

    
    return(
       <li>
           <button className = {props.isSelected ? 'active' : ''} onClick={props.onSelect}>{props.children}</button>
       </li>
    );
}