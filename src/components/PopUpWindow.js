import AddAssignmentElem from "../components/assignmentWindows/AddAssignmentElem";
import { useState } from "react";

const PopUpWindow = ({eventsObj, setEventsObj, popUp, setPopUp}) => {

    if (!popUp.show){
        return;
    }
    if (popUp.type === "addAssignment"){
        return (
            <AddAssignmentElem eventsObj={eventsObj} setEventsObj={setEventsObj} popUp={popUp} setPopUp={setPopUp}/>
        );
    }
    return ;
}

export default PopUpWindow;