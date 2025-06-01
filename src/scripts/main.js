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
  const oldUl = document.body.querySelector('ul');

  for (let y = 0; y < x.length; y++) {
    oldUl.append(x[y]);
  }
}

sortList(list);
getEmployees(list);
