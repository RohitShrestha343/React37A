import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../../css/auth.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./schema/login.schema";
import { apiCall } from "../../utils/api";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  console.log(errors);
  const onLogin = async (userData) => {
    console.log(userData);
    const loginResponse = await apiCall("POST", "/auth/login", {
      data: userData,
    });
    const responseToken = loginResponse?.data?.access_token;
    console.log(responseToken);
    localStorage.setItem("access_token", responseToken);
  };

  return (
    <>
      <div class="container">
        <div class="register-card">
          <h2>Login</h2>
          <p class="subtitle">Please Enter Valid Credentials for login</p>
          <form onSubmit={handleSubmit(onLogin)}>
            <div class="form-group">
              <label>Email Address</label>
              <input
                {...register("email")}
                type="text"
                placeholder="john@example.com"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div class="form-group">
              <label>Password</label>
              <input
                {...register("password")}
                type="password"
                placeholder="••••••••"
              />
            </div>

            <button type="submit" class="btn">
              Login
            </button>

            <p class="login-text">
              Dont have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
