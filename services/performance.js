export async function assignAssessment(assessmentData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/performance/assign-assesment";
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(assessmentData),
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
          "An error occurred while assigning the assessment.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while assigning the assessment.",
    };
  }
}

export async function createAssessmentReviewer(reviewerData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/performance/create-assesment-reviewer";
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(reviewerData),
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
          "An error occurred while creating the assessment reviewer.",
      };
    }
  } catch (error) {
    return {
      error:
        "An unexpected error occurred while creating the assessment reviewer.",
    };
  }
}

export async function createAssessmentForEmployee(employeeId, assessmentData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/performance/create-assesment-employee/${employeeId}`;
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(assessmentData),
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
          "An error occurred while creating the assessment for the employee.",
      };
    }
  } catch (error) {
    return {
      error:
        "An unexpected error occurred while creating the assessment for the employee.",
    };
  }
}

export async function getPeerToPeerPerformanceData() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/performance/peer-to-peer";
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
          "An error occurred while fetching peer-to-peer performance data.",
      };
    }
  } catch (error) {
    return {
      error:
        "An unexpected error occurred while fetching peer-to-peer performance data.",
    };
  }
}

export async function getMyAssessmentData() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/performance/my-assessment";
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
          "An error occurred while fetching my assessment data.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching my assessment data.",
    };
  }
}

export async function getPerformanceMetrics() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/performance/metrics";
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
          "An error occurred while fetching performance metrics.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching performance metrics.",
    };
  }
}

export async function getTaskMetrics() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/performance/task-metrics";
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
          "An error occurred while fetching task metrics.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching task metrics.",
    };
  }
}
export async function getEmployeeReviewHR(employeeId) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/performance/employee-review-hr/${employeeId}`;
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
          "An error occurred while fetching employee review data.",
      };
    }
  } catch (error) {
    return {
      error:
        "An unexpected error occurred while fetching employee review data.",
    };
  }
}
export async function getPeerReviewSingleData(reviewId) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/performance/peer-review-single/${reviewId}`;
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
          "An error occurred while fetching peer review data.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching peer review data.",
    };
  }
}
export async function getPerformanceRateData() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/performance/performance-rate";
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
          "An error occurred while fetching performance rate data.",
      };
    }
  } catch (error) {
    return {
      error:
        "An unexpected error occurred while fetching performance rate data.",
    };
  }
}
