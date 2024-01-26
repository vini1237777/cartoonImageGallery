import { useEffect, useRef, useState } from "react";

export const useDebounceRef = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const currentValRef = useRef(value);
  const previousVal = useRef(value);
 

  useEffect(() => {
    const handler = setTimeout(() => {
      if (value === currentValRef.current) {
      setDebouncedValue(currentValRef.current);
    }}, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]); 

   useEffect(() => {
    previousVal.current = currentValRef.current;
     currentValRef.current = value;
   }, [value]);

  return { debouncedValue: debouncedValue, previousVal: previousVal };
};