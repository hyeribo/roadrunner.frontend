module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-props-no-spreading": 0,
    "no-console": 0,
    "no-plusplus": 0,
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@root", "./src"],
          ["@assets", "./src/assets"],
          ["@config", "./src/config"],
          ["@atoms", "./src/components/atoms"],
          ["@molecules", "./src/components/molecules"],
          ["@organisms", "./src/components/organisms"],
          ["@templates", "./src/components/templates"],
          ["@pages", "./src/components/pages"],
          ["@modules", "./src/modules"],
          ["@routes", "./src/routes"],
          ["@styles", "./src/styles"],
        ],
        extensions: [".js", ".jsx"],
      },
    },
  },
};
