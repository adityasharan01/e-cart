// access user info from localstorage
const isAuth = state => {
    if (window !== "undefined") {
      if (state) {
        return true;
      } else {
        return false;
      }
    }
  };
  
  export default isAuth;
  