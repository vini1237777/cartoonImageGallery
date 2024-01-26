import { useEffect, useRef, useState } from "react";

// Custom hook to handle debounce functionality for input values.
export const useDebounceRef = (value: string, delay: number) => {
  // State to hold the debounced value.
  const [debouncedValue, setDebouncedValue] = useState(value);

  // Ref to track the current value.
  const currentValRef = useRef(value);

  // Ref to keep track of the previous value.
  const previousVal = useRef(value);

  // Effect to handle debouncing.
  useEffect(() => {
    // Setting a timeout to delay the update of debounced value.
    const handler = setTimeout(() => {
      if (value === currentValRef.current) {
        setDebouncedValue(currentValRef.current);
      }
    }, delay);

    // Cleanup function to clear the timeout.
    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  // Effect to keep current and previous values in sync with changes.
  useEffect(() => {
    previousVal.current = currentValRef.current;
    currentValRef.current = value;
  }, [value]);

  // Returning the debounced value and the ref to the previous value.
  return { debouncedValue, previousVal };
};
