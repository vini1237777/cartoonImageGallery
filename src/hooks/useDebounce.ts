import { useEffect, useRef, useState } from "react";

export const useDebounceRef = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const currentValRef = useRef(value);
  console.log({ currentValRef });
  
  useEffect(() => {
    currentValRef.current = value; 
  }, [value]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (value === currentValRef.current) {
      setDebouncedValue(currentValRef.current);
    }}, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]); 

  return debouncedValue;
};