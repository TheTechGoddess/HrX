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

export async function updateEmployeeHr(employeeId, updatedData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/management/update-employee-hr/${employeeId}`;
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "PUT",
      body: JSON.stringify(updatedData),
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
          "An error occurred while updating employee HR information.",
      };
    }
  } catch (error) {
    return {
      error:
        "An unexpected error occurred while updating employee HR information.",
    };
  }
}

export async function getEmployeeStatus() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/management/employee-status";
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
          "An error occurred while fetching employee status.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching employee status.",
    };
  }
}

export async function deactivateEmployeeHR(employeeId) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/management/deactivate-employee-hr/${employeeId}`;
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorResponse = await response.json();
      return {
        error:
          errorResponse.error ||
          "An error occurred while deactivating employee HR status.",
      };
    }
  } catch (error) {
    return {
      error:
        "An unexpected error occurred while deactivating employee HR status.",
    };
  }
}

export async function updateEmployee(employeeId, updatedData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/management/update-employee/${employeeId}`;
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "PUT",
      body: JSON.stringify(updatedData),
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
          "An error occurred while updating employee information.",
      };
    }
  } catch (error) {
    return {
      error:
        "An unexpected error occurred while updating employee information.",
    };
  }
}

export async function getEmployeeHr(employeeId) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/management/employee-hr/${employeeId}`;
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
          "An error occurred while fetching employee HR details.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching employee HR details.",
    };
  }
}
