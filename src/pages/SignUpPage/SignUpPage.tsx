import Header from "../../components/Header/Header";
import SignUp from "../../components/SignUp/SignUp";

const SignUpPage = () => {
  return (
    <>
      <Header
        heading="Sign Up To Your Account"
        paragraph="Already Have An Account?"
        linkName="Login"
        linkUrl="/auth"
      />
      <SignUp />
    </>
  );
};

export default SignUpPage;
