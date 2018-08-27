'use strict';

/*
input:
output:
input to each recursive call:
output of each recursive call:
*/

const fbHierarchy = [
  {id: 'Zuckerberg', boss: null},
  {id: 'Schroepfer', boss: 'Zuckerberg'},
  {id: 'Schrage', boss: 'Zuckerberg'},
  {id: 'Sandberg', boss: 'Zuckerberg'},
  {id: 'Bosworth', boss: 'Schroepfer'},
  {id: 'Steve', boss: 'Bosworth'},
  {id: 'Kyle', boss: 'Bosworth'},
  {id: 'Andra', boss: 'BosWorth'},
  {id: 'Zhao', boss: 'Schroepfer'},
  {id: 'Richie', boss: 'Zhao'},
  {id: 'Sofia', boss: 'Zhao'},
  {id: 'Jen', boss: 'Zhao'},
  {id: 'VanDyck', boss: 'Schrage'},
  {id: 'Sabrina', boss: 'VanDyck'},
  {id: 'Michelle', boss: 'VanDyck'},
  {id: 'Josh', boss: 'VanDyck'},
  {id: 'Blanch', boss: 'Swain'},
  {id: 'Tom', boss: 'Swain'},
  {id: 'Joe', boss: 'Swain'},
  {id: 'Goler', boss: 'Sandberg'},
  {id: 'Hernandez', boss: 'Sandberg'},
  {id: 'Moissinac', boss: 'Sandberg'},
  {id: 'Kelley', boss: 'Sandberg'},
  {id: 'Eddie', boss: 'Goler'},
  {id: 'Julie', boss: 'Goler'},
  {id: 'Annie', boss: 'Goler'},
  {id: 'Rowi', boss: 'Hernandez'},
  {id: 'Inga', boss: 'Hernandez'},
  {id: 'Amy', boss: 'Moissinac'},
  {id: 'Chuck', boss: 'Moissinac'},
  {id: 'Vinni', boss: 'Moissinac'},
  {id: 'Eric', boss: 'Kelley'},
  {id: 'Ana', boss: 'Kelley'},
  {id: 'Wes', boss: 'Kelley'},
];

function traverse(fbHierarchy, boss) {
  let node = {};
  fbHierarchy
    .filter(name => name.boss === boss)
    .forEach(name => node[name.id] = traverse (fbHierarchy, name.id));
  return node;
}

console.log(JSON.stringify(traverse(fbHierarchy, null), null, 3));