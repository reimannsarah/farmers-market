import React from "react";
import PropTypes from 'prop-types';

function SeasonInfo(props) {
  return (
    <React.Fragment>
      <h3>{props.season}</h3>
      <ul>
        {props.veggies}
      </ul>
    </React.Fragment>
  )
}

SeasonInfo.propTypes = {
  season: PropTypes.string,
  veggies: PropTypes.array
}

export default SeasonInfo;