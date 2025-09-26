import { Sort } from "./Sort";
import { Search } from "./Search";

export const Header = () => (
  <div className="flex items-center justify-between p-5 border-b-[0.5px] border-border-primary">
    <h1 className="text-lg font-bold text-black">Workflows</h1>
    <div className="flex items-center gap-2">
      <Sort />
      <Search />
    </div>
  </div>
);
