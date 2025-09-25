import { useQuery } from "@tanstack/react-query";

import { executeWorkflow } from "services/airops-service/airops";

export const Workflows = () => {
  const { data } = useQuery({
    queryKey: ["workflows"],
    queryFn: () => executeWorkflow(15),
  });

  return <div>Workflows {JSON.stringify(data)}</div>;
};
