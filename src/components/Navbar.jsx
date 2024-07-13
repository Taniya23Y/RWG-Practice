import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl px-5 py-3 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nLeft flex items-center ">
        <img
          src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="Links flex gap-12 ml-20">
          {/* making links with map function  */}
          {["Home", "Work", "About", "", "News", "Careers"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={elem} className="w-[2px] h-5 bg-zinc-400"></span>
            ) : (
              <a
                href="#"
                className="font-normal text-[0.795rem] flex items-center gap-1"
                key={elem}
              >
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 rounded-full bg-green-500"
                  ></span>
                ) : null}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
