import { useUserStore } from "../store/auth";
// auth.js

// Create a function that handles the form submission
export async function registerCompany(formData) {
  console.log(formData);
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;

  try {
    const response = await fetch(
      `${baseUrl}/api/v1/registeration/register-company`,
      {
        method: "POST",
        body: formData,
        headers: {
          // Make sure to set the correct content type for FormData
          // and any other required headers
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      // If the request is successful, parse the response as JSON
      return await response.json();
    } else {
      // If there's an error, handle it or return an error message
      return { error: "An error occurred while registering the company." };
    }
  } catch (error) {
    // Handle any unexpected errors
    return {
      error: "An unexpected error occurred while registering the company.",
    };
  }
}

export async function confirmEmail(confirmationCode, confirmationData) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/registeration/confirm-email/${confirmationCode}`;

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(confirmationData),
      headers: {
        "Content-Type": "application/json",
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
          "An error occurred while confirming the email.",
      };
    }
  } catch (error) {
    // Handle any unexpected errors
    return {
      error: "An unexpected error occurred while confirming the email.",
    };
  }
}

export async function selectPlan(plan) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/registeration/choose-plan";
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify({ plan }),
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
          errorResponse.error || "An error occurred while selecting the plan.",
      };
    }
  } catch (error) {
    // Handle any unexpected errors
    return {
      error: "An unexpected error occurred while selecting the plan.",
    };
  }
}

export async function inviteEmployees(emails) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const token = localStorage.getItem("token");
  const endpoint = "/api/v1/registeration/register-employee";

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify({ email: emails }),
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
          errorResponse.error || "An error occurred while inviting employees.",
      };
    }
  } catch (error) {
    // Handle any unexpected errors
    return {
      error: "An unexpected error occurred while inviting employees.",
    };
  }
}

export async function login(email, password, type) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/registeration/login";

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        type,
      }),
      headers: {
        "Content-Type": "application/json",
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
        error: errorResponse.error || "An error occurred while logging in.",
      };
    }
  } catch (error) {
    // Handle any unexpected errors
    return {
      error: "An unexpected error occurred while logging in.",
    };
  }
}

export async function confirmEmployee(employeeId, confirmationCode) {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = `/api/v1/registeration/confirm-employee/${employeeId}`;

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify({
        confirmationCode,
      }),
      headers: {
        "Content-Type": "application/json",
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
          "An error occurred while confirming the employee.",
      };
    }
  } catch (error) {
    // Handle any unexpected errors
    return {
      error: "An unexpected error occurred while confirming the employee.",
    };
  }
}

export async function resetPassword(email) {
  const url = useRuntimeConfig(); 
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/registeration/reset-password";

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      const errorResponse = await response.json();
      return {
        error: errorResponse.error || "An error occurred while resetting the password.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while resetting the password.",
    };
  }
}
