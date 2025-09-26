import { initializeAirOps } from "services/airops-service/airops";

export const executeColorWorkflow = async (): Promise<string> => {
  try {
    const airops = await initializeAirOps(import.meta.env.VITE_AIROPS_USER_ID);

    const response = await airops.apps.execute({
      appId: import.meta.env.VITE_AIROPS_COLOR_APP_ID,
      payload: {
        inputs: {},
      },
    });
    const result = await response.result();
    return result.output as string;
  } catch (error) {
    console.error("Workflow execution failed:", error);
    throw error;
  }
};
