import React from 'react';
import Sky from 'react-sky';

export default function Skill(props) {
  return (
    <div>
      <Sky
        images={{
          0: props.imagePath
        }}
        how={60}
        time={40}
        size={'80px'}
        background={'#282828'}
      ></Sky>
    </div >
  );
}