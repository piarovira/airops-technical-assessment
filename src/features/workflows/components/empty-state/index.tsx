import { Search } from "assets/icons";

export const EmptyState = () => (
  <div className="flex flex-1 flex-col items-center justify-center h-full">
    <img src={Search} className="w-10 h-10 m-4" alt="Empty State" />
    <span className="text-lg pt-3 pb-1 font-semibold text-font-primary">
      No workflows found
    </span>
    <span className="text-lg pb-3 pt-1 font-medium font-bold text-font-secondary">
      Try again using a different search term.
    </span>
  </div>
);
