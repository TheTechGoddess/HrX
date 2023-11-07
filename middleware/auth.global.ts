// authMiddleware.js

import { useLoginUser } from "../store/auth";
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('middleware/auth')
  const loginUser = useLoginUser();
 
 
  if (to.path === "/") {
    return
  } else {
    if (loginUser.isAuthenticated) {
      if (to.path.startsWith('/auth/') || to.path === '/') {
          return navigateTo('/dashboard');
        } else {
          return
        }
      } else {
        if (to.path.startsWith('/auth/') || to.path === '/') {
     return
        } else {
          return navigateTo('/auth/login');
        }
      }
  }


});




