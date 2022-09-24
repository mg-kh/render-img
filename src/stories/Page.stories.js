import React from "react";

import Page from "./Page";

export default {
  title: "Demo/Lazyload",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Page {...args} />;

export const LazyLoad = Template.bind({});
