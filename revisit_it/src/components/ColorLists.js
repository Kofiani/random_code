import React from 'react';
import Color from './Color';

const ColorList = ({ colors = [] }) => {
  if (!colors.length) return <>No Colors Listed</>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
        />
      ))}
    </div>
  );
};

export default ColorList;
