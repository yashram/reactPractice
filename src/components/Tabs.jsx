export default function Tabs({children, buttons, ButtonsContainer}){
   // const DefaultButtonsContainer = buttonsContainer;
    return (
    <> 
        <ButtonsContainer >
            {buttons}
        </ButtonsContainer >
          {children}
    </>
    );
}