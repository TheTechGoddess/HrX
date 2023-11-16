export async function getEmployeesHr() {
    const url = useRuntimeConfig();
    const baseUrl = url.public.baseUrl;
    const endpoint = "/api/v1/management/all-users-hr";
    const token = localStorage.getItem("token");
  
    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        return await response.json();
      } else {
        const errorResponse = await response.json();
        return {
          error:
            errorResponse.error ||
            "An error occurred while fetching HR pending leaves.",
        };
      }
    } catch (error) {
      return {
        error: "An unexpected error occurred while fetching HR pending leaves.",
      };
    }
  }

  export async function getEmployeesEmployee() {
    const url = useRuntimeConfig();
    const baseUrl = url.public.baseUrl;
    const endpoint = "/api/v1/management/all-users";
    const token = localStorage.getItem("token");
  
    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        return await response.json();
      } else {
        const errorResponse = await response.json();
        return {
          error:
            errorResponse.error ||
            "An error occurred while fetching HR pending leaves.",
        };
      }
    } catch (error) {
      return {
        error: "An unexpected error occurred while fetching HR pending leaves.",
      };
    }
  }