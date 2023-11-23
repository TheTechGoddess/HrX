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

export async function updateEmployee(updatedData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/management/update-employee";
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

export async function updateCompany(updatedData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/management/update-company";
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
          "An error occurred while updating company information.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while updating company information.",
    };
  }
}

export async function createGame(gameData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/management/create-game";
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(gameData),
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
          errorResponse.error || "An error occurred while creating the game.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while creating the game.",
    };
  }
}
export async function createAdventure(adventureData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/management/create-adventure";
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(adventureData),
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
          "An error occurred while creating the adventure.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while creating the adventure.",
    };
  }
}

export async function createAnonymousEntry(data) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/management/create-anonymous";
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
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
          "An error occurred while creating the anonymous entry.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while creating the anonymous entry.",
    };
  }
}

export async function createAffirmation(affirmationData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/management/create-affirmation";
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(affirmationData),
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
          "An error occurred while creating the affirmation.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while creating the affirmation.",
    };
  }
}

export async function getAnonymousData() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/management/get-anonymous";
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
          "An error occurred while fetching anonymous data.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching anonymous data.",
    };
  }
}

export async function getAdventureHRData() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/management/get-adventure-hr";
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
          "An error occurred while fetching adventure HR data.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching adventure HR data.",
    };
  }
}

export async function getAdventureData() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/management/get-adventure";
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
          "An error occurred while fetching adventure data.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching adventure data.",
    };
  }
}

export async function getAffirmationData() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/management/get-affirmation";
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
          "An error occurred while fetching affirmation data.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching affirmation data.",
    };
  }
}

export async function getGameData() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/management/get-games";
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
          "An error occurred while fetching affirmation data.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching affirmation data.",
    };
  }
}

export async function getGameDataHR() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/management/get-games-hr";
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
          "An error occurred while fetching affirmation data.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching affirmation data.",
    };
  }
}

export async function getMe() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}/api/v1/registeration/get-me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      // If the request is successful, parse the response as JSON
      return await response.json();
    } else {
      // If there's an error, handle it or return an error message
      const errorResponse = await response.json();
      return {
        error:
          errorResponse.error || "An error occurred while fetching user data.",
      };
    }
  } catch (error) {
    // Handle any unexpected errors
    return {
      error: "An unexpected error occurred while fetching user data.",
    };
  }
}
