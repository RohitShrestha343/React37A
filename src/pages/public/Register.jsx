import { Link } from "react-router-dom";
import "../../css/auth.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "./schema/register.schema";
import { apiCall } from "../../utils/api";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const onRegisterClick = async (registerData) => {
    console.log(registerData);
    try {
      const registerResponse = await apiCall("POST", `/users`, {
        data: registerData,
      });

      console.log(registerResponse?.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div class="container">
        <div class="register-card">
          <h2>Register</h2>
          <p class="subtitle">Please Enter Details For Register</p>
          <form onSubmit={handleSubmit(onRegisterClick)}>
            <div class="form-group">
              <label>Name</label>
              <input {...register("name")} type="text" placeholder="Name" />
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div class="form-group">
              <label>Email Address</label>
              <input {...register("email")} type="text" placeholder="Email" />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div class="form-group">
              <label>Password</label>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <button type="submit" class="btn">
              Register
            </button>

            <p class="login-text">
              Dont have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
