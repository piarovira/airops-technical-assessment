import { useQueryClient } from "@tanstack/react-query";
import { Workflow } from "../types/workflow";

export const useDeleteWorkflow = () => {
  const queryClient = useQueryClient();

  const deleteWorkflow = (id: string) => {
    queryClient.setQueryData<Workflow[]>(["workflows"], (old = []) =>
      old.filter((w) => w.id !== id)
    );
  };

  return { deleteWorkflow };
};
