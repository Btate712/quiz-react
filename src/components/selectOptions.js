import React from 'react';

function SelectOptions(props) {
  return props.objects.map(object => {
    return ( <option key={object.id} value={object.id}>{object.name}</option> )
  })
}

export default SelectOptions;