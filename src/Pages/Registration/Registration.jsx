import facebook from "../../assets/image/icons/fb.png";
import google from "../../assets/image/icons/google.png";

const Registration = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center mt-10">
            Registration Now !
          </h1>

          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
              <div className="flex justify-between items-center gap-3 mt-4">
                <input type="checkbox" name="" id="" />
                <p>Accept all terms and condition</p>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>
          </form>
          <div className=" mt-4">
            <p className="mb-4 pl-7">
              Already have an account ?
              <span>
                <a href="/login" className="link link-info">
                  {"  "}
                  Sign in now
                </a>
              </span>
            </p>
          </div>
          <div>
            <div className="divider divider-info px-10">Or</div>
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

export default Registration;
