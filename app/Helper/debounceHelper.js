import { useState, useEffect } from "react";

const DebounceHelper = () => {
  const [debouncing, setDebouncing] = useState(false);
  // Use the `useEffect` hook to handle debouncing.
  useEffect(() => {
    let timeoutId;
    // If we're currently debouncing, clear any existing timer and start a new one.
    if (debouncing) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setDebouncing(false), 1000);
    }
    // Whenever the `debouncing` state changes, reset the timer.
    else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setDebouncing(true);
      }, 500);
    }
    // return () => clearTimeout(timeoutId); // This function will be called on component unmount.
    return () => {
      // The component is unmounting, so cancel the timer.
      clearTimeout(timeoutId);
    };
  }, []);
  function doSomething() {
    console.log("I am doing something");
  }
  function onButtonClick() {
    // Call our helper function when the button is clicked.
    doSomething();
  }
  return <button onClick={onButtonClick}>Click me</button>;
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearInterval(handler);
  }, [value, delay]);
  return debouncedValue;
};
