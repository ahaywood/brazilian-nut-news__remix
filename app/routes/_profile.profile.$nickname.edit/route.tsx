export default function EditProfile() {
  return (
    <div className="page-grid">
      <div className="col-span-12 col-start-1 row-start-1">
        <h1 className="max-w-screen overflow-hidden pt-6 text-[375px] leading-[295px] text-fountainBlue">
          <div className="text-white">Edit My</div>
          <div className="outline">Profile</div>
          <div className="outline">Profile</div>
          <div className="outline">Profile</div>
          <div className="outline">Profile</div>
        </h1>
      </div>
      <div className="col-span-4 col-start-8 row-start-1 mb-20">
        <form action="" className="mb-10 mt-12 bg-cinder text-white">
          <fieldset>
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
              <label htmlFor="email" className="text-icterine">
                Email
              </label>
              <input type="email" required />
            </div>

            <div className="field">
              <label htmlFor="twitter" className="text-icterine">
                Twitter
              </label>
              <input type="url" name="twitter" />
            </div>

            <div className="field">
              <label htmlFor="github" className="text-icterine">
                GitHub
              </label>
              <input type="url" name="github" />
            </div>

            <div className="field">
              <label htmlFor="facebook" className="text-icterine">
                Facebook
              </label>
              <input type="url" name="facebook" />
            </div>

            <div className="field">
              <label htmlFor="youtube" className="text-icterine">
                YouTube
              </label>
              <input type="url" name="youtube" />
            </div>

            <div className="field">
              <label htmlFor="linkedin" className="text-icterine">
                LinkedIn
              </label>
              <input type="url" name="linkedin" />
            </div>

            <button
              className="w-full bg-icterine py-6 text-center text-[38px] font-bold leading-none text-cinder hover:bg-fountainBlue"
              type="submit"
            >
              Update
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
