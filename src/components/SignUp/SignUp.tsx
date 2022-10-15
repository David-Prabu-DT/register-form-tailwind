import { useNavigate } from "react-router-dom";
import { signUpFields } from "../../constants/formFields";
import useForm from "../../hooks/useForm";
import { AuthService } from "../../services/auth.service";
import Input from "../Input/Input";

const fields = signUpFields;
let fieldsState: any = {};
fields.forEach(
  (field: { id: string | number }) => (fieldsState[field.id] = "")
);

const SignUp = () => {
  const navigate = useNavigate();

  const formSignIn = () => {
    AuthService.setSignUpUser(values, navigate);
  };

  const { handleChange, values, errors, handleSubmit } = useForm(formSignIn);

  return (
    <>
      <form className="mt-8" onSubmit={handleSubmit} data-testid="form">
        <div className="">
          <Input
            handleChange={handleChange}
            labelText={"Username"}
            labelFor={"username"}
            name={"username"}
            type={"text"}
            placeholder={"Username"}
            dataTestId="username"
          />
          {errors.username && (
            <span className="text-pink-600 text-sm">{errors.username}</span>
          )}
          <Input
            handleChange={handleChange}
            labelText={"Email address"}
            labelFor={"email"}
            name={"email"}
            type={"email"}
            placeholder={"Email address"}
            dataTestId="emailAddress"
          />
          {errors.email && (
            <span className="text-pink-600 text-sm">{errors.email}</span>
          )}
          <Input
            handleChange={handleChange}
            labelText={"Password"}
            labelFor={"password"}
            name={"password"}
            type={"password"}
            placeholder={"Password"}
            dataTestId="password"
          />
          {errors.password && (
            <span className="text-pink-600 text-sm">{errors.password}</span>
          )}
          <Input
            handleChange={handleChange}
            labelText={"Confirm Password"}
            labelFor={"confirmPassword"}
            name={"confirmPassword"}
            type={"password"}
            placeholder={"Confirm Password"}
            dataTestId="confirmPassword"
          />
          {errors.confirmPassword && (
            <span className="text-pink-600 text-sm">
              {errors.confirmPassword}
            </span>
          )}

          <button
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            onSubmit={handleSubmit}
            data-testid="submitBtn"
          >
            SignUp
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
