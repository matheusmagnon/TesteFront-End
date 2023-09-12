import type { Preview } from "@storybook/react";
import "../src/index.css";

// import { addDecorator } from "@storybook/react";
// import { withContexts } from "@storybook/addon-contexts/react";
// import { OrdenCompraMonitorada } from "../src/context/OrdensCompraMonitoradasContext"; // we will define the contextual setups later in API section

// addDecorator(withContexts(OrdenCompraMonitorada));

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
