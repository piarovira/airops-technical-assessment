import { WorkflowsTable } from "./components/workflows-table";
import { Header } from "./components/header";
import { useWorkflows } from "./hooks/useWorkflows";
import { EmptyState } from "./components/empty-state";

export const Workflows = () => {
  const { sortedData } = useWorkflows();

  return (
    <div className="h-full flex flex-col">
      <div className="flex-shrink-0">
        <Header />
      </div>
      <div className="flex-1 overflow-auto bg-white">
        <div className="p-5">
          {sortedData && sortedData.length > 0 ? (
            <WorkflowsTable data={sortedData} />
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
};
