import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    sourcemap: false,
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
    peerDepsExternal(),
    commonjs({
      namedExports: {
        "node_modules/lodash/index.js": ["round", "debounce"],
      },
    }),
    terser(),
  ],
  external: ["react", "react-dom"],
};
