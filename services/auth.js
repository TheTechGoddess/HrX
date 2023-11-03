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

// Add this function to your auth.js module

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
