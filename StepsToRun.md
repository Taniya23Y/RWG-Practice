## npm create vite@latest

- project name => refokus
- React
- Javascript
- cd refokus

### npm install

### npm run dev

## Installing tailwind with vite

- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
- `put below code in tailwind.config.js file`

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- `put below code in index.css file`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Make components

- App.js
  - components
    - Navbar
    - Work
    - Stripes
    - Stripe
    - Products

#### Solution to Find images of marquees on website

```
document.querySelectorAll(".c-marquee-wrapper");

▶️NodeList(2) [div.c-marquee-wrapper, div.c-marquee-wrapper]

```

```
document.querySelectorAll(".c-marquee-wrapper")[0];

▶️ <div logos="marquee-1" class="c-marquee-wrapper">...</div>

```

```
document.querySelectorAll(".c-marquee-wrapper")[0].querySelectorAll(".c-marquee");

▶️ NodeList(3) [div.c-marquee, div.c-marquee,  div.c-marquee ]

```

```
document.querySelectorAll(".c-marquee-wrapper")[0].querySelectorAll(".c-marquee")[0];

▶️ <div class="c-marquee">...</div>

```

```
document.querySelectorAll(".c-marquee-wrapper")[0].querySelectorAll(".c-marquee")[0].querySelectorAll("img");

▶️ NodeList(11) [img.c-marquee, img.c-marquee, img.c-marquee, ....]

```

```
[...]document.querySelectorAll(".c-marquee-wrapper")[0].querySelectorAll(".c-marquee")[0].querySelectorAll("img);

```

```
var images = [...]document.querySelectorAll(".c-marquee-wrapper")[0].querySelectorAll(".c-marquee")[0].querySelectorAll("img);

```

```
images

▶️: (11) [img.c-marquee, img.c-marquee, img.c-marquee, ....]

```

```
images.map(item=>item.src);

```

```
images.map(item=>console.log(item.src));

```

#### It's time for animation

- ![locomotive js (github )](https://github.com/locomotivemtl/locomotive-scroll/tree/v5-beta?tab=readme-ov-file)

```
npm install locomotive-scroll@beta
```

- ![quick start guide](https://scroll.locomotive.ca/docs/#/quickstart?id=installation)
  - Paste below code in App.js

```
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();
```

- Animation on work component
  - go to Framer motion website
  - ![install framer motion](https://www.framer.com/motion/introduction/#install)
  - `npm install framer-motion`
  - `import { motion } from "framer-motion"`
  - useScroll
  - ![useScroll](https://www.framer.com/motion/use-scroll/)
    ```
    import { useScroll } from "framer-motion"
    ```
