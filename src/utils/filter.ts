import _ from "lodash";

import { Workflow } from "features/workflows/types/workflow";

export const filterAndSort = (
  data: Workflow[],
  filterCriteria: string,
  sortCriteria: string
): Workflow[] => {
  const [prop, order] = sortCriteria.split("-");
  const searchLower = filterCriteria.toLowerCase();
  const filtered = filterCriteria
    ? _.filter(data, (item) => item.name.toLowerCase().includes(searchLower))
    : data;
  const sorted = _.orderBy(filtered, [prop], [order as "asc" | "desc"]);

  return sorted;
};
