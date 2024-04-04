import { useCallback, useState } from "react";

import useDebounce from "./use-debounce";

const useSearch = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 700);

  const onChangeValue = useCallback((value: string) => {
    setValue(value);
  }, []);

  return {
    value: debounceValue,
    realtimeValue: value,
    onChangeValue,
  };
};

export default useSearch;
