import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { executeColorWorkflow } from "../services/getRandomColor";
import { useEditWorkflow } from "./useEditWorkflow";
import { Tag } from "../types/workflow";

interface UseAddTagProps {
  workflowId: string;
  existingTags: Tag[];
  onSuccess: () => void;
}

export const useAddTag = ({
  workflowId,
  existingTags,
  onSuccess,
}: UseAddTagProps) => {
  const { addTagToWorkflow } = useEditWorkflow();
  const [tagText, setTagText] = useState("");
  const [shouldExecute, setShouldExecute] = useState(false);

  const {
    data: color,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["color", tagText],
    queryFn: () => executeColorWorkflow(),
    enabled: shouldExecute && !!tagText.trim(),
  });

  useEffect(() => {
    if (color && shouldExecute) {
      addTagToWorkflow(workflowId, existingTags, { text: tagText, color });
      onSuccess();
    }
  }, [
    color,
    shouldExecute,
    tagText,
    addTagToWorkflow,
    workflowId,
    existingTags,
    onSuccess,
  ]);

  useEffect(() => {
    if (error) {
      setShouldExecute(false);
    }
  }, [error]);

  const handleAddTag = () => {
    if (!tagText.trim()) return;
    setShouldExecute(true);
  };

  const handleCloseModal = () => {
    setTagText("");
    setShouldExecute(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAddTag();
    if (e.key === "Escape") handleCloseModal();
  };

  return {
    tagText: { value: tagText, setValue: setTagText },
    isLoading,
    handleAddTag,
    handleCloseModal,
    handleKeyDown,
  };
};
