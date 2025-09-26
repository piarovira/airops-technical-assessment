import { Workflow } from "features/workflows/types/workflow";
import { getRelativeTime } from "utils/relativeTime";
import { Edit, Delete } from "assets/icons";
import { useEditWorkflow } from "features/workflows/hooks/useEditWorkflow";
import { useDeleteWorkflow } from "features/workflows/hooks/useDeleteWorkflow";
import { Tags } from "../tags";

interface RowProps {
  workflow: Workflow;
}

export const Row = ({ workflow }: RowProps) => {
  const { updateWorkflow } = useEditWorkflow();
  const { deleteWorkflow } = useDeleteWorkflow();

  return (
    <tr key={workflow.id} className="text-sm text-gray-900 hover:bg-gray-50">
      <td className="px-4 py-4">
        <div className="flex items-center gap-2 font-normal">
          <span className="text-font-quaternary">{workflow.type}</span>
        </div>
      </td>
      <td className="px-4 py-4 font-medium text-font-primary text-base">
        {workflow.emoji} {workflow.name}
      </td>
      <td className="px-4 py-4">
        <Tags tags={workflow.tags || []} id={workflow.id} />
      </td>
      <td className="px-4 py-4 text-font-light font-normal text-sm">
        {getRelativeTime(workflow.lastUpdated)}
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center justify-end gap-2">
          <button
            className="rounded-md bg-button-bg p-2 cursor-pointer"
            aria-label="Edit"
            onClick={() =>
              updateWorkflow(workflow.id, { name: "Workflow edited" })
            }
          >
            <img src={Edit} alt="Edit" className="w-4 h-4" />
          </button>
          <button
            className="rounded-md bg-button-bg p-2 cursor-pointer"
            aria-label="Delete"
            onClick={() => deleteWorkflow(workflow.id)}
          >
            <img src={Delete} alt="Delete" className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};
