import { Tag } from "features/workflows/types/workflow";

interface ExistingTagsProps {
  tags: Tag[];
}

export const ExistingTags = ({ tags }: ExistingTagsProps) => {
  if (tags.length === 0) return null;

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Existing Tags
      </label>
      <div className="flex flex-wrap gap-2 rounded-md">
        {tags.map(({ color, text }, index) => (
          <span
            key={`${text}-${color}-${index}`}
            className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-sm font-semibold text-font-primary"
          >
            <span
              className="h-2 w-2 rounded-[2px]"
              style={{ backgroundColor: color }}
            />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};
