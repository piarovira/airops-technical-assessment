import { initializeAirOps } from "services/airops-service/airops";
import { Workflow } from "../types/workflow";

export const executeWorkflow = async (count = 10): Promise<Workflow[]> => {
  try {
    const airops = await initializeAirOps(import.meta.env.VITE_AIROPS_USER_ID);

    const response = await airops.apps.execute({
      appId: import.meta.env.VITE_AIROPS_APP_ID,
      payload: {
        inputs: {
          count: count,
        },
      },
    });
    const result = await response.result();
    return result.output as Workflow[];
  } catch (error) {
    console.error("Workflow execution failed:", error);
    throw error;
  }
};
