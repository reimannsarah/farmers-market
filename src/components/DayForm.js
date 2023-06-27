import React from "react";

function DayForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.handleSubmit}>
        <select value={props.input} onChange={props.handleChange}>
          <option value="" disabled="true">Please Select a Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
        <button type="submit">Show me the day</button>
      </form>
    </React.Fragment>
  );
}

export default DayForm;