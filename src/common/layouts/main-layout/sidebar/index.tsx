import { Plus } from "assets/icons";
import { sidebarItems } from "./contants";

export const Sidebar = () => (
  <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-neutral-200 flex flex-col">
    <div className="flex flex-col gap-2 p-2">
      <div className="px-1.5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center" />
          <span className="font-semibold text-font-primary text-base">
            AirOps
          </span>
        </div>
      </div>

      <div className="">
        <button className="p-1.5 w-full text-sm flex items-center justify-center gap-2 border border-border-black rounded-md text-font-primary font-medium hover:bg-gray-100 transition-colors shadow-xs">
          <span>New</span>
          <img src={Plus} alt="Plus" className="w-3 h-3" />
        </button>
      </div>
    </div>

    <div className="flex-1">
      {sidebarItems.map((item) => (
        <button
          key={item.name}
          className="text-xs font-medium w-full gap-2 flex items-center p-2 text-font-secondary hover:bg-gray-50 transition-colors"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <img src={item.icon} alt={item.name} className="w-4 h-4" />
          </div>
          <span className="font-medium">{item.name}</span>
        </button>
      ))}
    </div>
  </div>
);
