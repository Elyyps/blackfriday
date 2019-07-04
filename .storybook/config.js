import { configure } from "@storybook/react";

import "../src/client/index.scss";

// automatically import all files ending in *.stories.tsx
const req = require.context("../src/shared", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
