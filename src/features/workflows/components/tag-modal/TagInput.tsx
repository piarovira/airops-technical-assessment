interface TagInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export const TagInput = ({ value, onChange, onKeyDown }: TagInputProps) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      New Tag Text
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter tag text"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
      autoFocus
      onKeyDown={onKeyDown}
    />
  </div>
);
