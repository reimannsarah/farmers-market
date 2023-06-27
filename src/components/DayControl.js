import React from "react";
import DayForm from "./DayForm";
import DayInfo from "./DayInfo";

class DayControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false 
    };
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <DayForm />
    } else {
      currentlyVisibleState = <DayInfo />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default DayControl;