import React from "react";

function DayForm() {
  return (
    <React.Fragment>
      <form>
        <select>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
        </select>
      </form>
    </React.Fragment>
  );
}

export default DayForm;