import { useNavigate } from "react-router-dom";
import { loginFields } from "../../constants/formFields";
import useForm from "../../hooks/useForm";
import { AuthService } from "../../services/auth.service";
import FormExtra from "../FormExtra/FormExtra";
import Input from "../Input/Input";

const fields = loginFields;
let fieldsState: any = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Login = () => {
  const navigate = useNavigate();

  const formLogin = () => {
    AuthService.loginUser(values, navigate);
  };

  const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

  return (
    <>
      <form className="mt-3" onSubmit={handleSubmit} data-testid="form">
        <div className="">
          <Input
            handleChange={handleChange}
            labelText={"Email Address"}
            labelFor={"emailAddress"}
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
          {errors?.password && (
            <span className="text-pink-600 text-sm">{errors.password}</span>
          )}
        </div>
        <div className="mt-5">
          <FormExtra />
        </div>
        <button
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
          onSubmit={handleSubmit}
          data-testid="submitBtn"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
