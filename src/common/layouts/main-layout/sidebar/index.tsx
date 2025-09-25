export const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-neutral-200 flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center">
            <span className="text-purple-600 font-bold text-sm">A</span>
          </div>
          <span className="font-bold text-gray-900 text-lg">AirOps</span>
        </div>
      </div>

      <div className="p-4">
        <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors">
          <span>New</span>
          <span className="text-lg">+</span>
        </button>
      </div>

      <div className="flex-1 px-4 space-y-1">
        <button className="w-full flex items-center gap-3 py-3 px-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          <div className="w-5 h-5 flex items-center justify-center">
            <svg viewBox="0 0 20 20" className="w-4 h-4 text-gray-600">
              <path
                fill="currentColor"
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
              />
            </svg>
          </div>
          <span className="font-medium">Data Name</span>
        </button>

        <button className="w-full flex items-center gap-3 py-3 px-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          <div className="w-5 h-5 flex items-center justify-center">
            <svg viewBox="0 0 20 20" className="w-4 h-4 text-gray-600">
              <path
                fill="currentColor"
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
          </div>
          <span className="font-medium">Monitoring</span>
        </button>

        <button className="w-full flex items-center gap-3 py-3 px-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          <div className="w-5 h-5 flex items-center justify-center">
            <svg viewBox="0 0 20 20" className="w-4 h-4 text-gray-600">
              <path
                fill="currentColor"
                d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15v-3a2 2 0 114 0v3h2V7.83l-6-4.286L2 7.83V15h2z"
              />
            </svg>
          </div>
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
};
