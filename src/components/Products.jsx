import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";

const Products = () => {
  const products = [
    {
      title: "Arqitel",
      description: `With a continuous 3D animation, we showcase Arqitel approach and
            show how migration data translates into real estate.`,
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description: `We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.`,
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      description: `An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.`,
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description: `We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.`,
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      description: `A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.`,
      live: true,
      case: false,
    },
    {
      title: "Singularity",
      description: `A new site for Singularity that supports their growth and showcases their true identity as industry innovators.`,
      live: true,
      case: false,
    },
    {
      title: "Like Magic",
      description: `We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.`,
      live: true,
      case: true,
    },
    {
      title: "Silvr",
      description: `We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.`,
      live: true,
      case: false,
    },
    {
      title: "Rainfall",
      description: `We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.`,
      live: true,
      case: true,
    },
    {
      title: "Intenseye",
      description: `A brand new website for Intenseye just before their $64M Series.`,
      live: true,
      case: false,
    },
    {
      title: "Remind",
      description: `Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.`,
      live: true,
      case: true,
    },
    {
      title: "Summon",
      description: `We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.`,
      live: true,
      case: true,
    },
    {
      title: "Jungle",
      description: `We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.`,
      live: true,
      case: true,
    },
    {
      title: "Candid Health",
      description: `A complete redesign of a health-startup website, followed by cutting edge development.`,
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description: `We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.`,
      live: true,
      case: true,
    },
    {
      title: "YIR 2022",
      description: `Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.`,
      live: true,
      case: false,
    },
    {
      title: "YIR 2021",
      description: `We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.`,
      live: true,
      case: false,
    },
    {
      title: "Showcase",
      description: `Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.`,
      live: true,
      case: false,
    },
    {
      title: "Weglot",
      description: `We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.`,
      live: true,
      case: false,
    },
    {
      title: "RocketChat",
      description: `We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.`,
      live: true,
      case: false,
    },
  ];

  // jabh bhi parents components (Products) me kuch change karna ho, child component mein kuch hone ki vajah se.
  // Toh function ya methods ko parent component par banao then use props ke through child par chala do

  const [position, setPosition] = useState(0);
  const mover = (val) => {
    setPosition(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((value, index) => (
        <Product value={value} key={index} count={index} mover={mover} />
      ))}

      <div className="absolute top-0 w-full h-full  pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          className="window absolute w-[30rem] h-[23rem] rounded-3xl  left-[45%] overflow-hidden"
        >
          {/* 1  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full  rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm`}
            ></video>
          </motion.div>

          {/* 2  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4`}
            ></video>
          </motion.div>

          {/* 3  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4`}
            ></video>
          </motion.div>

          {/* 4  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full  rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm`}
            ></video>
          </motion.div>

          {/* 5  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full  rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/Maniv-Compressed.mp4`}
            ></video>
          </motion.div>

          {/* 6  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/Singularity%20Promo%204_3%202024.webm`}
            ></video>
          </motion.div>

          {/* 7  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/2022/videos/weglotlikemagic.webm`}
            ></video>
          </motion.div>

          {/* 8  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/2022/videos/Silvr.webm`}
            ></video>
          </motion.div>

          {/* 9  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/2022/videos/rainfall.webm`}
            ></video>
          </motion.div>

          {/* 10  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/Intenseye_project_video_4_3.webm`}
            ></video>
          </motion.div>

          {/* 11  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/2022/videos/remind.webm`}
            ></video>
          </motion.div>

          {/* 12  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/2022/videos/summon.webm`}
            ></video>
          </motion.div>

          {/* 13  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/jungle-4-3-.webm`}
            ></video>
          </motion.div>

          {/* 14  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/Candid/Candid%20Health%204_3_H.264.webm`}
            ></video>
          </motion.div>

          {/* 15  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/2022/videos/yahoo.webm`}
            ></video>
          </motion.div>

          {/* 16  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm`}
            ></video>
          </motion.div>

          {/* 17  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/2022/videos/yearinreview.webm`}
            ></video>
          </motion.div>

          {/* 18  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4`}
            ></video>
          </motion.div>

          {/* 19  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.io/website/2022/videos/weglot.webm`}
            ></video>
          </motion.div>

          {/* 20  */}
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window  w-full h-full  rounded-3xl  "
          >
            <video
              className="absolute object-cover h-full rounded-3xl"
              autoPlay
              muted
              loop
              src={`https://cdn.refokus.com/website/2022/videos/rocketchat.webm`}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
