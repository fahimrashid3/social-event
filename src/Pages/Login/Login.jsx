import facebook from "../../assets/image/icons/fb.png";
import google from "../../assets/image/icons/google.png";

const Login = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center mt-10">Login now!</h1>

          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className=" mt-4">
            <p className="mb-4 pl-7">
              Do not have an account ?
              <span>
                <a href="/registration" className="link link-info">
                  {"  "}
                  create account
                </a>
              </span>
            </p>
          </div>
          <div>
            <div className="divider divider-info px10">Or</div>
            <div className="flex justify-center items-center gap-5 mb-6">
              <img className="max-w-16 max-h-16" src={facebook} alt="" />
              <img className="max-w-16 max-h-16" src={google} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
