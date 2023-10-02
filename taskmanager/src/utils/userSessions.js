// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem("username");
    if (userStr) return JSON.parse(userStr);
    else return null;
  };
  

  
  // remove the user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem("username");
  };
  
  // set user from the session storage
  export const setUserSession = (user) => {
    sessionStorage.setItem("username", JSON.stringify(user));
  
  };