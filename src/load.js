// export default function printMe() {
//     console.log('I get called from print.js!');
//   }

export default function component() {
    const element = document.createElement('div');
   const btn = document.createElement('button');
 
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;
 
   element.appendChild(btn);
 
  return element;
  }