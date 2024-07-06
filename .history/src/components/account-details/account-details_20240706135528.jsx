function AccountDetails() {
  return (
    <div className="lg:pr-12 pb-9 pt-10 ml-20 xl:ml-56 ">
      {/* header */}
      <div className="flex flex-col xl:flex-row items-start xl:justify-between gap-5 w-full ">
        <div className="text-start flex flex-col gap-2">
          <h1 className="text-xl text-accent">
            <span className="font-semibold">Hello,</span> Welcome back Gerald!
          </h1>
        </div>
        <h2 className="text-[#6c747d]">
          Home - <span className="text-accent">Dashboard</span>
        </h2>
      </div>
      {/*  */}
      <div className="text-start mt-10 p-8 bg-white min-h-screen text-[#abafb3] ">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold">
            Drive business impact with{" "}
            <span className="text-purple-600">
              Creativo's Client Success Team
            </span>
            .
          </h1>
        </header>

        <section className="mb-8 text-start ">
          <p className="mb-4 text-[#abafb3]">
            At <span className="text-purple-600">Creativo </span>
            our dolor sit amet, consetetur sadipscing elitr, sed diam nonu
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
            di voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, Creativo sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt{" "}
          </p>

          <ul className="list-disc pl-5 mb-4 text-start flex flex-col gap-3">
            <li>
              <a href="#" className="text-purple-600">
                On-Boarding
              </a>{" "}
              - dolor sit amet, consectetur adipiscing elit, sed diam nonummy...
            </li>
            <li>
              <a href="#" className="text-purple-600">
                Webinars
              </a>{" "}
              - dolor sit amet,{" "}
              <span className="text-purple-600">Creativo</span> adipiscing elit,
              sed diam nonummy...
            </li>
            <li>
              <a href="#" className="text-purple-600">
                Roundtables
              </a>{" "}
              - dolor sit amet, consectetur adipiscing elit, sed diam{" "}
              <span className="text-purple-600">Creativo</span>...
            </li>
            <li>
              <a href="#" className="text-purple-600">
                On Going Partnership
              </a>{" "}
              - dolor sit amet, consectetur adipiscing elit, sed diam nonummy...
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy...
          </p>
        </section>

        <section className="flex justify-around  gap-10 mt-20 mb-10">
          <div className="text-center">
            <div className="p-4 mb-4 bg-white rounded-full shadow-md inline-block">
              <span role="img" aria-label="chat" className="text-3xl">
                💬
              </span>
            </div>
            <h2 className="text-xl font-bold mb-2">Live Chat</h2>
            <p className="text-[#abafb3]">
              Our support Representatives are available to assist you instantly
              during business hours!
            </p>
            <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded">
              Start Chat Now
            </button>
          </div>

          <div className="text-center">
            <img src="/images/account-info/1.svg" alt="" className="w-5 h-5" />

            <h2 className="text-xl font-bold mb-2">Phone</h2>
            <p className="text-[#abafb3]">
              Always available during business hours to help! The best way to
              get you connected
            </p>
            <a href="tel:8331235670" className="mt-4 block text-purple-600">
              (833)-123-5670
            </a>
          </div>

          <div className="text-center">
            <div className="p-4 mb-4 bg-white rounded-full shadow-md inline-block">
              <span role="img" aria-label="email" className="text-3xl">
                📧
              </span>
            </div>
            <h2 className="text-xl font-bold mb-2">Email</h2>
            <p className="text-[#abafb3]">
              Need to email us directly? Please allow within 1 business day for
              response.
            </p>
            <a
              href="mailto:ClientSuccess@creativo.com"
              className="mt-4 block text-purple-600"
            >
              ClientSuccess@creativo.com
            </a>
          </div>
        </section>

        <section className="p-8 text-center max-w-screen-md mx-auto">
          <h2 className="text-xl font-bold mb-4">
            Let's connect your to our Client Success
          </h2>
          <form className="mt-10">
            <div className="mb-4">
              <label htmlFor="service" className="block text-gray-700">
                Select Client Success Service
              </label>
              <select
                id="service"
                className="mt-5 block w-full border-gray-300 rounded-md shadow-md border p-5"
              >
                <option>- Select Client Success Service -</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="comment" className="block text-gray-700">
                Question or Comment
              </label>
              <textarea
                id="comment"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
      );
    </div>
  );
}

export default AccountDetails;
