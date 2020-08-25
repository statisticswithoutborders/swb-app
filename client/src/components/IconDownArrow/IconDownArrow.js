import React, { useState } from 'react';
import "./IconDownArrow.css";


const IconDownArrow = (props) => {


  let classList = `IconDownArrow`;

  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)

  return (
    <div className={classList}>
      <div>
        <div onClick={onClick} style={{ color: "#C4C4C4", cursor: 'pointer' }}>&#9660;</div>
        {showResults ? <Results /> : null}
      </div>

    </div>
  );
}

const Results = () => (
  <div className="search-results">
    More Info
  </div>
)

export default IconDownArrow;