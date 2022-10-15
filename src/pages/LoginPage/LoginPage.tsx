import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";

export default function LoginPage() {
  return (
    <>
      <Header
        heading="Login To Your Account"
        paragraph="Don't Have An Account Yet?"
        linkName="SignUp"
        linkUrl="/SignUp"
      />
      <Login />
    </>
  );
}
