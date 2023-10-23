// import { useUserStore } from "../store/auth";

// export async function login(email, password) {
//   const url = useRuntimeConfig();
//   const baseUrl = url.public.baseUrl;
//   try {
//     const response = await fetch(`${baseUrl}/api/v1/auth/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.status === 200) {
//       const responseData = await response.json();
//       const user = responseData.data.user;
//       const accessToken = responseData.data.accessToken;
//       console.log(user, accessToken);

//       // Save individual data fields in the store
//       const userStore = useUserStore();
//       userStore.id = user.id;
//       userStore.email = user.email;
//       userStore.firstName = user.first_name;
//       userStore.lastName = user.last_name;
//       userStore.accessToken = accessToken;
//       userStore.isLoggedIn = true;
//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("accessToken", accessToken); // Add this line

//       // console.log(2, userStore);
//       return { user, accessToken };
//     } else {
//       const errorData = await response.json();
//       // console.log(errorData.error);
//       throw new Error(errorData.error || "Login failed");
//     }
//   } catch (error) {
//     console.error("Login failed:", error);
//     throw error;
//   }
// }

// export async function signup(firstName, lastName, email, password) {
//   const url = useRuntimeConfig();
//   const baseUrl = url.public.baseUrl;
//   try {
//     const response = await fetch(`${baseUrl}/api/v1/auth/signup`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ firstName, lastName, email, password }),
//     });

//     if (response.status === 201) {
//       // Registration was successful
//       console.log("Registration successful");
//     } else {
//       const errorData = await response.json(); // Read the response once
//       console.log("Error Data:", errorData);
//       // If the error message exists in errorData, you can log it
//       if (errorData) {
//         console.log("Error Message:", errorData.error);
//         throw new Error(errorData.error); // Throw an error with the error message
//       } else {
//         console.log("No error message found in response.");
//         throw new Error("Sign up failed"); // Throw a generic error
//       }
//     }
//   } catch (error) {
//     console.error("Sign up failed:", error);
//     throw error;
//   }
// }

// // confirmEmail.js;

// export async function confirmEmail(token) {
//   const url = useRuntimeConfig();
//   const baseUrl = url.public.baseUrl;
//   const apiUrl = `${baseUrl}/api/v1/auth/verify-email/${token}`;

//   try {
//     const response = await fetch(apiUrl, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log(data.data); // Log the response.data.data
//       localStorage.setItem("emailConfirmationData", JSON.stringify(data.data)); // Save to localStorage
//       return "success";
//     } else {
//       const errorData = await response.json();
//       throw new Error(errorData.error || "Email confirmation failed");
//     }
//   } catch (error) {
//     console.error("Email confirmation failed:", error);
//     throw error;
//   }
// }

// export async function sendPasswordResetEmail(email) {
//   const url = useRuntimeConfig();
//   const baseUrl = url.public.baseUrl;
//   const apiUrl = `${baseUrl}/api/v1/auth/send-password-reset-email/${email}`;

//   try {
//     const response = await fetch(apiUrl, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.status === 200) {
//       console.log("Password reset email sent successfully.");
//       return "success";
//     } else if (response.status === 404) {
//       console.error("User not found.");
//       throw new Error("User not found");
//     } else {
//       console.error("Failed to send password reset email.");
//       throw new Error("Failed to send password reset email");
//     }
//   } catch (error) {
//     console.error("Password reset email initialization failed:", error);
//     throw error;
//   }
// }
// export async function resetPassword(token, newPassword) {
//   const url = useRuntimeConfig();
//   const baseUrl = url.public.baseUrl;
//   const apiUrl = `${baseUrl}/api/v1/auth/reset-password/${token}`;

//   try {
//     const response = await fetch(apiUrl, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ newPassword }),
//     });

//     if (response.ok) {
//       console.log("Password reset successfully.");
//       return "success";
//     } else {
//       const errorData = await response.json();
//       throw new Error(errorData.error || "Password reset failed");
//     }
//   } catch (error) {
//     console.error("Password reset failed:", error);
//     throw error;
//   }
// }
// export async function resendEmailVerificationLink(email) {
//   const url = useRuntimeConfig();
//   const baseUrl = url.public.baseUrl;
//   const apiUrl = `${baseUrl}/api/v1/auth/resend-verification-email/${email}`;

//   try {
//     const response = await fetch(apiUrl, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.status === 200) {
//       console.log("Email verification link resent successfully.");
//       return "success";
//     } else if (response.status === 404) {
//       console.error("User not found.");
//       throw new Error("User not found");
//     } else {
//       console.error("Failed to resend email verification link.");
//       throw new Error("Failed to resend email verification link");
//     }
//   } catch (error) {
//     console.error("Resending email verification link failed:", error);
//     throw error;
//   }
// }
// export async function getOAuthRedirectURL() {
//   const url = useRuntimeConfig();
//   const baseUrl = url.public.baseUrl;
//   const redirectEndpoint = "/api/v1/auth/github/redirect";
//   const githubOAuthURL = `${baseUrl}${redirectEndpoint}`;

//   try {
//     const response = await fetch(githubOAuthURL);

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const responseData = await response.text(); // Parse response as text
//     return responseData;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error; // Rethrow the error for further handling
//   }
// }

// export async function confirmUserOAuthAccess() {
//   const url = useRuntimeConfig();
//   const baseUrl = url.public.baseUrl;
//   const confirmEndpoint = "/api/v1/auth/confirm-session-authorization/github";
//   const confirmURL = `${baseUrl}${confirmEndpoint}`;

//   try {
//     const response = await fetch(confirmURL, {
//       method: "POST", // or the appropriate HTTP method
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // Include any data needed for confirmation, e.g., user access tokens.
//     });

//     if (response.ok) {
//       return "success";
//     } else {
//       const errorData = await response.json();
//       throw new Error(errorData.error || "Confirmation failed");
//     }
//   } catch (error) {
//     console.error("Confirmation failed:", error);
//     throw error;
//   }
// }

// // authServices.js

// export async function completeOAuthProcess(code) {
//   const url = useRuntimeConfig();
//   const baseUrl = url.public.baseUrl;

//   try {
//     // Send the 'code' to the backend for further processing.
//     const response = await fetch(
//       `${baseUrl}/api/v1/auth/github/callback?login=true`,
//       {
//         method: "POST", // or the appropriate HTTP method
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ code }),
//       }
//     );

//     if (response.status === 200) {
//       const responseData = await response.json();
//       const user = responseData.data.user;
//       const accessToken = responseData.data.accessToken;

//       // Save individual data fields in the store
//       const userStore = useUserStore();
//       userStore.id = user.id;
//       userStore.email = user.email;
//       userStore.firstName = user.first_name;
//       userStore.lastName = user.last_name;
//       userStore.accessToken = accessToken;
//       userStore.isLoggedIn = true;

//       // Save user and access token to local storage
//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("accessToken", accessToken);

//       return { user, accessToken };
//     } else {
//       const errorData = await response.json();
//       throw new Error(errorData.error || "OAuth process failed");
//     }
//   } catch (error) {
//     console.error("OAuth process failed:", error);
//     throw error;
//   }
// }
