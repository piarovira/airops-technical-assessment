import { useQueryClient } from "@tanstack/react-query";

import { Workflow, Tag } from "../types/workflow";

export const useEditWorkflow = () => {
  const queryClient = useQueryClient();

  const updateWorkflow = (id: string, updates: Partial<Workflow>) => {
    queryClient.setQueryData<Workflow[]>(["workflows"], (old = []) =>
      old.map((w) =>
        w.id === id
          ? { ...w, ...updates, lastUpdated: new Date().toISOString() }
          : w
      )
    );
  };

  const addTagToWorkflow = (
    id: string,
    tags: Tag[],
    tag: { text: string; color: string }
  ) => {
    updateWorkflow(id, {
      tags: [...(tags || []), tag],
    });
  };

  return { updateWorkflow, addTagToWorkflow };
};
