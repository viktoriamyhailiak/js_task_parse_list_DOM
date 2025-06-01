'use strict';

let list = document.getElementsByTagName('li');

function sortList(x) {
  const array = [...x];

  for (const n of array) {
    n.dataset.salary = +n.dataset.salary
      .split('')
      .filter((elem) => !isNaN(elem))
      .join('');
  }

  array.sort((z, y) => y.dataset.salary - z.dataset.salary);
  list = array;
}

function getEmployees(x) {
  const sortedUl = document.createElement('ul');

  document.body.append(sortedUl);

  for (let y = 0; y < x.length; y++) {
    sortedUl.append(x[y]);
  }

  document.body.querySelector('ul').remove();
}

sortList(list);
getEmployees(list);
