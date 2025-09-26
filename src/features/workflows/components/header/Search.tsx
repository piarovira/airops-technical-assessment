import { useState } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "react-use";

import { setSearch } from "features/workflows/slices/filtersSlice";
import { Search as SearchIcon } from "assets/icons";

export const Search = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  useDebounce(() => dispatch(setSearch(value)), 500, [value]);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <img src={SearchIcon} alt="Search" className="w-4 h-4" />
      </div>
      <input
        type="text"
        placeholder="Search workflows"
        className="w-64 pl-10 pr-3 py-1 border border-border-deepBlack rounded-md text-gray-900 placeholder:text-base placeholder-font-tertiary focus:outline-none focus:border-transparent shadow-sm"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};
