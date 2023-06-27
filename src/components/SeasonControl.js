import React from "react";
import SeasonForm from './SeasonForm.js';
import SeasonInfo from './SeasonInfo.js';

class SeasonControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <SeasonForm />
    } else {
      currentlyVisibleState = <SeasonInfo />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default SeasonControl;