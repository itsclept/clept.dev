import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default {
  syntax: "postcss-scss",
  plugins: [tailwindcss(), autoprefixer()],
};
