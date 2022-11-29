import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Star from './Star';

/*
 * selected > i is a boolean.
 * it checks each iteration if selected is
 * greater than i, if it is true, color red. if false
 * color is grey. The default is set to false in the
 * child component
 *
 * onSelect is a props.method passing change state
 * function from the parent component StarRating to the
 * child component Star. The child component recieve
 * the props.method and passes it to a onClick event
 * This way it sends the event value up the tree.
 */

const createArray = (length) => [...Array(length)];

const StarRating = ({ style = {}, totalStars = 5, ...props }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div
      style={{ padding: '5px', ...style }}
      {...props}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars.
      </p>
    </div>
  );
};

export default StarRating;
