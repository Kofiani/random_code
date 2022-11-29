import React from 'react';
import Ingredient from './Ingredient';

/**
 * the spread operator is used here to
 * collect and insert the list of properties
 * without the need to make manual entries of all.
 * <Ingredient {...ingredient}/>
 * it would have been written as
 * <ingredient
 * amount={ingredient.amount}
 * measurement={ingredient.measurement}
 * name={ingredient.name}
 * />
 *
 * Almost like
 * let ingredient = {
 *  amount: 1,
 *  measurement: "cup",
 *  name: "sugar"
 * }
 * <Ingredients amount={1} measurement="cup"/>
 */

export default function IngredientsLists({ list }) {
  return (
    <ul className='ingredients'>
      {list.map((ingredient, i) => (
        <Ingredient
          key={i}
          {...ingredient}
        />
      ))}
    </ul>
  );
}
