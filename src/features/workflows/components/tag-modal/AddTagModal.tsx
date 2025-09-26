import { Tag } from "features/workflows/types/workflow";
import { useAddTag } from "../../hooks/useAddTag";
import { ExistingTags } from "./ExistingTags";
import { TagInput } from "./TagInput";
import { ModalActions } from "./ModalActions";

interface AddTagModalProps {
  id: string;
  handleClose: () => void;
  tags: Tag[];
}

export const AddTagModal = ({ id, handleClose, tags }: AddTagModalProps) => {
  const { tagText, handleAddTag, handleCloseModal, handleKeyDown, isLoading } =
    useAddTag({
      workflowId: id,
      existingTags: tags,
      onSuccess: handleClose,
    });

  const handleCancel = () => {
    handleCloseModal();
    handleClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
        <h3 className="text-lg font-semibold mb-4">Add New Tag</h3>

        <ExistingTags tags={tags} />

        <TagInput
          value={tagText.value}
          onChange={tagText.setValue}
          onKeyDown={handleKeyDown}
        />

        <ModalActions
          onCancel={handleCancel}
          onAdd={handleAddTag}
          isLoading={isLoading}
          isDisabled={!tagText.value.trim()}
        />
      </div>
    </div>
  );
};
