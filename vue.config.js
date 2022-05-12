const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/vue2TodoList",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/_variables.scss";
        `,
      },
    },
  },
});

/* _가 붙은 scss 파일은 변수만을 저장하는 파일로 인식된다. */
