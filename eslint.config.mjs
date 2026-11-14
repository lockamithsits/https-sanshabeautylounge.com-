import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
// eslint-config-next 16.3.8 ships a native flat-config array — import it
// directly. FlatCompat + core-web-vitals crashes on eslint 9.
const nextConfig = require("eslint-config-next");

export default [...nextConfig];
