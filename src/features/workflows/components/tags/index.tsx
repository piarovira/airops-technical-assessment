import { Tag } from "features/workflows/types/workflow";
import { AddTag } from "./AddTag";
import { useState } from "react";
import { AddTagModal } from "../tag-modal/AddTagModal";

interface TagsProps {
  tags: Tag[];
  id: string;
}

export const Tags = ({ tags, id }: TagsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tagCount = tags?.length || 0;
  const handleClose = () => setIsModalOpen(false);

  if (tagCount === 0) {
    return <AddTag id={id} tags={tags} />;
  }

  return (
    <>
      <button
        className="flex flex-wrap gap-2"
        onClick={() => setIsModalOpen(true)}
      >
        <span className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-sm font-semibold text-font-primary">
          <div className="gap-1 flex">
            {tags.map(({ color, text }) => (
              <span
                key={`${text}-${color}`}
                className="h-2 w-2 rounded-[2px]"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {tagCount > 1 ? `${tagCount} tags` : tags[0].text}
        </span>
      </button>

      {isModalOpen && (
        <AddTagModal tags={tags} id={id} handleClose={handleClose} />
      )}
    </>
  );
};
