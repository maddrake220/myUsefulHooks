import { useState, useEffect } from "react";

const useLocalStorage = (name, initialValue) => {
  const [Value, setValue] = useState(
    () => JSON.parse(window.localStorage.getItem(name)) || initialValue
  );

  useEffect(() => {
    window.localStorage.setItem(name, JSON.stringify(Value));
  }, [Value]);

  return [Value, setValue];
};

export default useLocalStorage;
