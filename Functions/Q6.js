function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return (...nextArgs) => curried(...args, ...nextArgs);
      }
    };
  }
  
  // Function to add two numbers
  function add(a, b) {
    return a + b;
  }
  
  // Testing the curry function
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(3)(4)); // 7
  console.log(curriedAdd(5, 6)); // 11
  