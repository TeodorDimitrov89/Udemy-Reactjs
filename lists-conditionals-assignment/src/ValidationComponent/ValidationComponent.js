import React from 'react';

const validationComponent = (props) => {
  let textMsg = 'Text too short';

  if(props.charCount >= 5) {
    textMsg = 'Text long enough';
  }

  return <p>{textMsg}</p>;
}

export default validationComponent;