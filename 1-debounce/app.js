/* 
    Debouncing is a technique used to control how many times we allow a 
    function to be executed over time. When a JavaScript function is debounced 
    with a wait time of X milliseconds, it must wait until after X milliseconds 
    have elapsed since the debounced function was last called. You almost 
    certainly have encountered debouncing in your daily lives before — when entering 
    an elevator. Only after X duration of not pressing the "Door open" button 
    (the debounced function not being called) will the elevator door actually close 
    (the callback function is executed).

    Implement a debounce function which accepts a callback function and a wait duration. 
    Calling debounce() returns a function which has debounced invocations of the callback 
    function following the behavior described above. 
*/

export default function debounce(func, wait = 0) {
    let timeoutID = null;
    return function (...args) {
      // Keep a reference to `this` so that
      // func.apply() can access it.
      const context = this;
      clearTimeout(timeoutID);
  
      timeoutID = setTimeout(function () {
        timeoutID = null; // Not strictly necessary but good to do this.
        func.apply(context, args);
      }, wait);
    };
}


// Typescript Solution

export default function debounceTs(func: Function, wait: number = 0): Function {
    let timeoutID: ReturnType<typeof setTimeout> | null = null;
  
    return function (this: any, ...args: any[]) {
      // Keep a reference to `this` so that
      // func.apply() can access it.
      const context = this;
      clearTimeout(timeoutID ?? undefined);
  
      timeoutID = setTimeout(function () {
        timeoutID = null; // Not strictly necessary but good to do this.
        func.apply(context, args);
      }, wait);
    };
  }
  