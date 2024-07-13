/* eslint-disable react/prop-types */

const Marquee = ({ imagesurls }) => {
  return (
    <div className="flex w-full py-5 gap-20 whitespace-nowrap overflow-hidden">
      {imagesurls.map((url, index) => (
        <img
          src={url}
          key={index}
          alt="marquee_images"
          className="w-30 flex-shrink-0"
        />
      ))}
    </div>
  );
};

export default Marquee;
