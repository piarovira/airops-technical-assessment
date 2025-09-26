import { Workflow } from "features/workflows/types/workflow";
import { Row } from "./Row";

interface WorkflowsTableProps {
  data: Workflow[];
}

export const WorkflowsTable = ({ data }: WorkflowsTableProps) => (
  <div className="overflow-hidden rounded-xl  bg-white">
    <table className="w-full table-fixed divide-y divide-gray-200">
      <thead>
        <tr className="text-left text-base text-font-primary font-semibold">
          <th className="px-4 py-3 w-28">Type</th>
          <th className="px-4 font-bold py-3">Name</th>
          <th className="px-4 py-3 w-40">Tags</th>
          <th className="px-4 py-3 w-40">Last Updated</th>
          <th className="px-4 py-3 w-28 text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {data?.map((workflow: Workflow) => (
          <Row key={workflow.id} workflow={workflow} />
        ))}
      </tbody>
    </table>
  </div>
);
