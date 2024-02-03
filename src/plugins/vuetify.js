/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// colors
import colors from "vuetify/util/colors";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.blue.darken2,
          secondary: colors.grey.darken1,
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#fcc900",
          secondary: colors.grey.lighten1,
          accent: colors.grey.lighten4,
          error: colors.red.accent3,
          VSheet: colors.grey.lighten1,
        },
      },
    },
  },
});
