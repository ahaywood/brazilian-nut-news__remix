export default function ForgotPassword() {
  return (
    <div className="page-grid min-h-screen bg-cinder">
      <div className="col-span-12 col-start-1 row-start-1">
        <h1 className="max-w-screen overflow-hidden pt-6 text-[375px] leading-[295px] text-fountainBlue">
          <div className="text-white">FORGOT</div>
          <div className="outline">PASSWORD</div>
        </h1>
      </div>
      <div className="col-span-4 col-start-8 row-start-1">
        {/* FORGOT PASSWORD FORM */}
        <form action="" className="mt-[100px] bg-cinder p-2 text-white">
          <div className="field">
            <label htmlFor="username" className="text-icterine">
              Username
            </label>
            <input type="text" name="username" required />
          </div>

          <button className="w-full bg-icterine py-6 text-center text-[38px] font-bold leading-none text-cinder hover:bg-fountainBlue">
            Submit
          </button>

          <div className="my-3 text-center">
            <a
              href="/login"
              className="text-icterine underline hover:text-white hover:no-underline"
            >
              Ready to login?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
