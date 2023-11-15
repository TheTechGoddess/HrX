// Create a function that handles the form submission
export async function createEvent(formData) {
  console.log(formData);
  const url = useRuntimeConfig(); // Make sure useRuntimeConfig is imported or defined
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/wellness/create-event"; // Fix the typo here
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      body: formData, // Fix the variable name here
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      // If the request is successful, parse the response as JSON
      return await response.json();
    } else {
      // If there's an error, handle it or return an error message
      return { error: "An error occurred while creating event." };
    }
  } catch (error) {
    // Handle any unexpected errors
    return {
      error: "An unexpected error occurred while creating event.",
    };
  }
}

export async function getEventsHr() {
  const url = useRuntimeConfig();
  const baseUrl = url.public.baseUrl;
  const endpoint = "/api/v1/wellness/all-events-hr";
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
          errorResponse.error || "An error occurred while fetching events.",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurred while fetching events.",
    };
  }
}
