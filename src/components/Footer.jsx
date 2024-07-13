const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-screen-2xl mx-auto py-10 flex gap-40 p-6">
        <div className="basic-1/2">
          <h1 className="text-[11.5rem] font-medium leading-none tracking-tight">
            refokus.
          </h1>
        </div>

        <div className="basic-1/2 flex gap-20">
          <div className="basic-1/3 ">
            <h4 className="mb-5 text-center capitalize">socials</h4>
            {[
              "instagram",
              "twitter X",
              "linkedin",
              "Facebook",
              "github",
              "email",
            ].map((item, index) => (
              <a
                className="block mt-2 text-zinc-600 capitalize hover:underline cursor-pointer"
                key={index}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="basic-1/3 ">
            <h4 className="mb-5 text-center capitalize">socials</h4>
            {[
              "instagram",
              "twitter X",
              "linkedin",
              "Facebook",
              "github",
              "email",
            ].map((item, index) => (
              <a
                className="block mt-2 text-zinc-600 capitalize hover:underline cursor-pointer"
                key={index}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="basic-1/2 flex flex-col items-end">
            <p className="text-right ">
              Refokus is pioneering digital agency <br /> driven by design and
              empowered by <br /> technology.
            </p>
            <img
              className="w-32 mt-12"
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
