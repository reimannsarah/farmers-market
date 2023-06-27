import React from "react";
import DayForm from "./DayForm";
import Day from "./Day";

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

class DayControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true,
      userInput: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    });
    console.log(event.target.value)
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ formVisibleOnPage: false })
    console.log(this.state.userInput);

  }
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState =
        <React.Fragment>
          <DayForm
            handleSubmit={this.handleFormSubmit}
            handleChange={this.handleChange}
            input={this.state.userInput}
          />

        </React.Fragment>
    } else {
      const chosenDay = marketSchedule.filter(day => day.day === this.state.userInput)
      if (chosenDay.length === 0) {
        currentlyVisibleState =
          <React.Fragment>
            <p>Please select a day dummy</p>
            <button onClick={this.handleClick}>Back</button>
          </React.Fragment>
      } else {
        currentlyVisibleState =
          <React.Fragment>
            <Day day={chosenDay[0].day}
              location={chosenDay[0].location}
              hours={chosenDay[0].hours}
              booth={chosenDay[0].booth}
            />
            <button onClick={this.handleClick}>Back</button>
          </React.Fragment>
      }

    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default DayControl;