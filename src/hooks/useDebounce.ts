import { useEffect, useRef, useState } from "react";

// custom hook to handle debounce functionality for input values.
export const useDebounceRef = (value: string, delay: number) => {
  // state to hold the debounced value.
  const [debouncedValue, setDebouncedValue] = useState(value);

  // ref to keep track of the current value.
  const currentValRef = useRef(value);

  // ref to keep track of the previous value.
  const previousVal = useRef(value);

  // useEffect to handle debouncing.
  useEffect(() => {
    // setting a timer to delay the update of debounced value.
    const handler = setTimeout(() => {
      if (value === currentValRef.current) {
        setDebouncedValue(currentValRef.current);
      }
    }, delay);

    // cleanup function to clear the timeout.
    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  // useEffect to keep current and previous values in sync with changes.
  useEffect(() => {
    previousVal.current = currentValRef.current;
    currentValRef.current = value;
  }, [value]);

  // returning the debounced value and the ref to the previous value.
  return { debouncedValue, previousVal };
};
