export default function Signup() {
  return (
    <div className="page-grid min-h-screen bg-cinder">
      <div className="col-span-12 col-start-1 row-start-1">
        <h1 className="max-w-screen overflow-hidden pt-6 text-[375px] leading-[295px] text-fountainBlue">
          <div className="text-white">SIGNUP</div>
          <div className="outline">SIGNUP</div>
          <div className="outline">SIGNUP</div>
        </h1>
      </div>
      <div className="col-span-4 col-start-8 row-start-1 mb-20">
        {/* FORM */}
        <form action="" className="mt-[100px] bg-cinder text-white">
          <div className="field">
            <label htmlFor="username" className="text-icterine">
              Email
            </label>
            <input type="email" name="username" />
          </div>

          <div className="field">
            <label htmlFor="firstName" className="text-icterine">
              First Name
            </label>
            <input type="text" name="firstName" />
          </div>

          <div className="field">
            <label htmlFor="lastName" className="text-icterine">
              Last Name
            </label>
            <input type="text" name="lastName" />
          </div>

          <div className="field">
            <label htmlFor="nickname" className="text-icterine">
              Nickname
            </label>
            <input type="text" name="nickname" />
          </div>

          <div className="field">
            <label htmlFor="password" className="text-icterine">
              Password
            </label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
            />
          </div>

          <div>
            <button className="w-full bg-icterine py-6 text-center text-[38px] font-bold leading-none text-cinder hover:bg-fountainBlue">
              Sign Up
            </button>
            <div className="py-3 text-center">
              <span>Already have an account?</span>{" "}
              <a
                href="/login"
                className="text-icterine underline hover:text-white hover:no-underline"
              >
                Log in!
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
