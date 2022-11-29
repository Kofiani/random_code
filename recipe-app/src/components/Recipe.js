import React from 'react';
import IngredientsLists from './IngredientsLists';
import { Instruction } from './Instruction';
/**
 * NOTE: Array.prototype.map(element, index, array)
 * React requires a key id to keep track of changes made
 * to the virtual DOM. To generate this key
 * we must pass 2 arguements into the map() method.
 *
 * React.createElement(tag, property/object, children)
 * React.createElement('h1', {id: 'recipes-0'}, "Baked Salmon") is the same as <h1 id="recipe-0"> Baked Salmon</h1>
 *
 * console.log(React.createElement(...args)) would return an object. returning an object in jsx or arrow function we pass the data in parenthesis "return (obj)"
 * {}
 */
export default function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, '-')}>
      <h1>{name}</h1>
      <IngredientsLists list={ingredients} />
      <Instruction
        title='Cooking Instructions'
        steps={steps}
      />
    </section>
  );
}
