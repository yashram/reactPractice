import componentImage from "./assets/components.png";
import jsxImage from "./assets/jsx-ui.png";
import propImage from "./assets/config.png";
import stateImage from "./assets/state-mgmt.png";

export const CORECONCEPTS = [
    {
        title : "Components",
        description : "The Core UI Building Block- compose the user interface by combining multiple componets.",
        image : componentImage
    },
    {
        title : "JSX",
        description : "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files.",
        image : jsxImage
    },
    {
        title : "Props",
        description : "Props are short for properties and are used to pass data from one component to another.",
        image : propImage
    },
    {
        title : "State",
        description : "State is a built-in object that allows components to create and manage their own data.",
        image : stateImage
    }

];

export const EXAMPLES = {
    component: {
        title: "Components",
        description: "Components are the building blocks of a React application. They allow you to break down the UI into reusable pieces, making it easier to manage and maintain your code.",
        code: `function welcome(){
        return <h1>Hello, World!</h1>;
        }`,
    },
    jsx: {
        title: "JSX",
        description: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It makes it easier to create and visualize the structure of your UI components.",
        code: `
        <div>
            <h1>Hello, World!</h1>
            <p>This is a JSX example.</p>
        </div>`,
    },
    props: {
        title: "Props",
        description: "Props are short for properties and are used to pass data from one component to another. They allow you to customize the behavior and appearance of components.",
        code:`function Welcome(props) {
            return <h1>Hello, {props.name}!</h1>;
        }`,
    },
    state: {
        title: "State",
        description: "State is a built-in object that allows components to create and manage their own data. It enables components to respond to user interactions and update the UI dynamically.",
        code: `function Counter(){
        const [count, setCount] = useState(0);
        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        );
        }`
    }
}