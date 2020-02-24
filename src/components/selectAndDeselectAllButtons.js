import React from 'react';

const SelectAndDeselectAllButtons = props => {
  return(
    <>
      <button className="btn btn-primary mr-1" onClick={props.selectAll} type="button">
        Select All
      </button>
      <button className="btn btn-primary" onClick={props.deSelectAll} type="button">
        De-Select All
      </button>
    </>
  );
}

export default SelectAndDeselectAllButtons;