export default function TabButtons({isSelected , children, ...extraProps}) {

    

    
    return(
       <li>
           <button className = {isSelected ? 'active' : ''} {...extraProps}>{children}</button>
       </li>
    );
}