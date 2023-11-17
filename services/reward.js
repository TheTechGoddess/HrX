export async function createAward(awardData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/award/create-award";
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(awardData),
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
          errorResponse.error || "An error occurred while creating the award.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while creating the award.",
    };
  }
}

export async function nominateForAward(nominationData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/award/nominate";
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(nominationData),
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
          "An error occurred while nominating for the award.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while nominating for the award.",
    };
  }
}

export async function getHighestNominee(nomineeId) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/award/highest-nominee/${nomineeId}`;
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
          "An error occurred while fetching highest nominee.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching highest nominee.",
    };
  }
}

export async function voteForNominee(voteData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/award/vote";
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(voteData),
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
          "An error occurred while voting for the nominee.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while voting for the nominee.",
    };
  }
}

export async function getVoteResult(nomineeId) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/award/vote-result/${nomineeId}`;
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
          "An error occurred while fetching vote result.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching vote result.",
    };
  }
}

export async function getLeadersHr() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/award/leaders-hr";
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
          errorResponse.error || "An error occurred while fetching HR leaders.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching HR leaders.",
    };
  }
}

export async function getLeadersEmployee() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/award/leaders";
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
          errorResponse.error || "An error occurred while fetching leaders.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching leaders.",
    };
  }
}

export async function getAwardDashboardData() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/award/award-dashboard";
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
        error: errorResponse.error || "Error fetching award dashboard data.",
      };
    }
  } catch (error) {
    return {
      error:
        "An unexpected error occurred while fetching award dashboard data.",
    };
  }
}

export async function resetAwardData(dataId) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/award/reset/${dataId}`;
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
        error: errorResponse.error || "Error resetting award data.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while resetting award data.",
    };
  }
}

export async function getPreviousWinners() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/award/previous-winners";
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
          "An error occurred while fetching previous winners.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching previous winners.",
    };
  }
}

export async function getRecentWinner() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/award/recent-winner";
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
        error: errorResponse.error || "Error fetching recent winner data.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching recent winner data.",
    };
  }
}

export async function getRecentAward() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/award/recent-award";
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
          "Error fetching information about the recent award.",
      };
    }
  } catch (error) {
    return {
      error:
        "An unexpected error occurred while fetching information about the recent award.",
    };
  }
}

export async function getYourNominee(nomineeId) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/award/your-nominee/${nomineeId}`;
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
          "An error occurred while fetching your nominee.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching your nominee.",
    };
  }
}

export async function getRecentAwardHr() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/award/recent-award-hr";
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
          "An error occurred while fetching recent HR award.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching recent HR award.",
    };
  }
}

export async function getRecentWinnerHR() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/award/recent-winner-hr";
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
        error: errorResponse.error || "Error fetching recent HR winner data.",
      };
    }
  } catch (error) {
    return {
      error:
        "An unexpected error occurred while fetching recent HR winner data.",
    };
  }
}

export async function getPreviousWinnersHR() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/award/previous-winners-hr";
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
          "An error occurred while fetching previous HR winners.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching previous HR winners.",
    };
  }
}

export async function getTotalAwards() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/award/total-awards";
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
        error: errorResponse.error || "Error fetching total awards data.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching total awards data.",
    };
  }
}
