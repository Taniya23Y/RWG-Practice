/* eslint-disable react/prop-types */

const Marquee = ({ imagesurls }) => {
  return (
    <div className="flex w-full py-5 gap-20">
      {imagesurls.map((url, index) => (
        <img src={url} key={index} alt="marquee_images" className="" />
      ))}
    </div>
  );
};

export default Marquee;
