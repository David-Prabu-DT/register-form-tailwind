

const setSignUpUser = <T>(user: T, navigate: (arg0: string) => void) => {
   localStorage.setItem("user", JSON.stringify(user));
   navigate("/auth");
};

const getUserInfo = () => {
   return JSON.parse(localStorage.getItem("user") || "{}");
};

const loginUser = (loginState: { emailAddress?: string; password?: string; }, navigate: (arg0: string) => void) => {

   let registeredUser: any = JSON.parse(localStorage.getItem('user') || "{}");

   if (loginState?.emailAddress === registeredUser?.emailAddress && loginState?.password === registeredUser?.password) {
      alert('You are logged in.');
      window.location.reload()

   } else {
      alert('No User Found');
   }
}

const logOutUser = (navigate: (arg0: string) => void) => {
   alert('You are logged out. Thank You !!');
   window.location.reload()
   localStorage.removeItem("user");
}


export const AuthService = {
   setSignUpUser,
   getUserInfo,
   loginUser,
   logOutUser
};