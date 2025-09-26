import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { executeWorkflow } from "../services/getWorkflows";
import { filterAndSort } from "utils/filter";
import { RootState } from "common/definitions/redux/store";

export const useWorkflows = () => {
  const { sort, search } = useSelector((state: RootState) => state.filters);
  const { data } = useQuery({
    queryKey: ["workflows"],
    queryFn: () => executeWorkflow(15),
  });

  const sortedData = useMemo(
    () => filterAndSort(data || [], search, sort),
    [data, sort, search]
  );

  return { sortedData };
};
