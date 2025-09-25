import AirOps from "@airops/airops-js";

const createHashedUserId = async (userId: string): Promise<string> => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  try {
    const response = await fetch(`${apiBaseUrl}/api/hash-user-id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.hashedUserId;
  } catch (error) {
    console.error("Error creating hashed user ID:", error);
    throw error;
  }
};

const initializeAirOps = async (userId: string) => {
  try {
    const hashedUserId = await createHashedUserId(userId);
    const airops = AirOps.identify({
      userId: import.meta.env.VITE_AIROPS_USER_ID,
      workspaceId: import.meta.env.VITE_AIROPS_WORKSPACE_ID,
      hashedUserId: hashedUserId,
    });

    return airops;
  } catch (error) {
    console.error("Failed to initialize AirOps:", error);
    throw error;
  }
};

const executeWorkflow = async (count = 10) => {
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
    return result.output;
  } catch (error) {
    console.error("Workflow execution failed:", error);
  }
};

export { createHashedUserId, initializeAirOps, executeWorkflow };
