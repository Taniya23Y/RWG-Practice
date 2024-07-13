const Work = () => {
  const images = [
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "52%",
      left: "53%",
      isActive: true,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "62%",
      left: "46%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "57%",
      left: "51%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "53%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "48%",
      left: "48%",
      isActive: false,
    },
  ];
  return (
    // pt-[2rem]
    <div className="w-full ">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[38vw] leading-none font-normal tracking-wider select-none ">
          Work
        </h1>
        <p className="text-sm font-light text-white text-opacity-60">
          Web Design, Webflow Development, and Creative Development
        </p>

        {/* for images */}
        <div className="absolute top-0 w-full h-full ">
          {images.map(
            (elem) =>
              elem.isActive && (
                <img
                  className="absolute w-[17rem] rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt="hero-images"
                  key={elem}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
