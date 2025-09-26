import { useState } from "react";

import { Tag } from "features/workflows/types/workflow";
import { AddTagModal } from "../tag-modal/AddTagModal";

export const AddTag = ({ id, tags }: { id: string; tags: Tag[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <button
        className="rounded-full border border-border-black cursor-pointer px-2.5 py-1 font-semibold text-sm text-font-light hover:bg-gray-50"
        onClick={() => setIsModalOpen(true)}
      >
        + Add Tag
      </button>

      {isModalOpen && (
        <AddTagModal tags={tags} id={id} handleClose={handleClose} />
      )}
    </>
  );
};
