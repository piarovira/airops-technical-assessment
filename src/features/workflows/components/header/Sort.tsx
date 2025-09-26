import { Menu, Portal } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { setSort } from "features/workflows/slices/filtersSlice";
import { ArrowDown } from "assets/icons";

const sortOptions = [
  { label: "Name (A-Z)", value: "name-asc" },
  { label: "Name (Z-A)", value: "name-desc" },
  { label: "Last Updated (Newest first)", value: "lastUpdated-desc" },
  { label: "Last Updated (Oldest first)", value: "lastUpdated-asc" },
  { label: "Type (A-Z)", value: "type-asc" },
  { label: "Type (Z-A)", value: "type-desc" },
];

export const Sort = () => {
  const dispatch = useDispatch();

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <button className="flex items-center gap-2 px-3 py-1.5 border-[0.5px] border-border-primary rounded-md text-font-primary font-semibold text-sm hover:bg-gray-50 transition-colors">
          <span>Sort</span>
          <img src={ArrowDown} alt="Arrow Down" className="w-2.5 h-2.5" />
        </button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOptions.map((option) => (
              <Menu.Item
                key={option.value}
                value={option.value}
                onClick={() => dispatch(setSort(option.value))}
              >
                {option.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
