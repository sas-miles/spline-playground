import { Application } from '@splinetool/runtime';

const canvas = document.querySelector('.spline canvas');
const spline = new Application(canvas);
spline.load('https://prod.spline.design/u7doFV6D2jGUmb7U/scene.splinecode').then(() => {
  //const obj = spline.findObjectByName('Cube');
  // or
  const obj = spline.findObjectById('aeb2e4df-4c91-442f-a2d7-cf01d5fa0144');

  console.log(obj); // Spline Object => { name: 'Cube', id: '7AF5EBC0-09BB-4720-B045-F478F8053AA4', position: {}, ... }

  // move the object in 3D space
  obj.position.x += 10;
});
