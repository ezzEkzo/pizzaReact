import React from 'react';

import NotFoundBlock from '../components/NotFoundBlock';

const NotFound = () => {
  return <NotFoundBlock />;
};

export default NotFound;

// const wait = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// };

// const start = async function (arg) {
//   let i = 0;
//   while (i++ < 10) {
//     await DBDrive.updateRow(1000);
//     console.log(arg);
//   }
// };

// const startByHand = () => {
//   let i = 0;
//   const cycle = () => {
//     const promise = new Promise((resolve) => {
//       wait(1000).then(resolve);
//     });
//     promise.then(microtaskCallback);
//   };

//   const microtaskCallback = () => {
//     console.log(arg);
//     i++;
//     if (i < 10) cycle();
//   };

//   cycle();
// };

// startByHand(1);
// startByHand(2);
