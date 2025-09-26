interface ModalActionsProps {
  onCancel: () => void;
  onAdd: () => void;
  isLoading: boolean;
  isDisabled: boolean;
}

export const ModalActions = ({
  onCancel,
  onAdd,
  isLoading,
  isDisabled,
}: ModalActionsProps) => {
  return (
    <div className="flex justify-end gap-3">
      <button
        onClick={onCancel}
        className="px-4 py-2 text-sm border border-brand text-brand rounded-md hover:bg-gray-50 transition-colors"
      >
        Cancel
      </button>
      <button
        onClick={onAdd}
        disabled={isDisabled}
        className="px-4 py-2 text-sm bg-brand text-white rounded-md hover:bg-brand disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Loading..." : "Add Tag"}
      </button>
    </div>
  );
};
