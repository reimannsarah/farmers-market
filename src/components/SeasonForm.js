import React from "react";

function SeasonForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <select value={props.input} onChange={props.handleChange}>
        <option value="" disabled="true">Please Select a Season</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      <button type="submit">Show me the veggies</button>
    </form>
  )
}

export default SeasonForm;