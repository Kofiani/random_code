import React from 'react';
import StarRating from './StarRating';

const App = () => {
  return (
    <>
      <StarRating
        style={{ backgroundColor: 'lightblue' }}
        onDoubleClick={(e) => alert('click click')}
      />
    </>
  );
};

export default App;
