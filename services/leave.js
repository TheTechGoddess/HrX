// create leave types
export async function createLeaveType(leaveTypeData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/leave/create-type";
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(leaveTypeData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      // If the request is successful, you can handle the success response here if needed.
      // For example, you can return response.json() to process the response data.
      return await response.json();
    } else {
      // If there's an error, handle it or return an error message.
      const errorResponse = await response.json();
      return {
        error:
          errorResponse.error ||
          "An error occurred while creating the leave type.",
      };
    }
  } catch (error) {
    // Handle any unexpected errors
    return {
      error: "An unexpected error occurred while creating the leave type.",
    };
  }
}

// leave types
export async function getLeaveTypes() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/leave/leave-types";
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
          "An error occurred while fetching leave types.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching leave types.",
    };
  }
}

// leave request
export async function createLeave(leaveData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/leave/create-leave";
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(leaveData),
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
          errorResponse.error || "An error occurred while creating the leave.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while creating the leave.",
    };
  }
}

export async function getHrPendingLeave() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/leave/hr/pending";
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

export async function getHrApprovedLeave() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/leave/hr/approved";
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
          "An error occurred while fetching HR approved leaves.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching HR approved leaves.",
    };
  }
}

export async function getHrRejectedLeave() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/leave/hr/rejected";
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
          "An error occurred while fetching HR rejected leaves.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching HR rejected leaves.",
    };
  }
}

export async function updateLeaveStatus(leaveId, statusData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/leave/hr/update-status/${leaveId}`;
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(statusData),
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
          "An error occurred while updating leave status.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while updating leave status.",
    };
  }
}

export async function getMyLeave() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/leave/my-leave";
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
          "An error occurred while fetching your leave details.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching your leave details.",
    };
  }
}

export async function getLeaveSummary(leaveType) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/leave/summary?leaveType=${leaveType}`;
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
          "An error occurred while fetching leave summary.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching leave summary.",
    };
  }
}
