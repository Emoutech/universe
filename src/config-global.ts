// routes
import { paths } from "src/routes/paths";

// API
// ----------------------------------------------------------------------

export const HOST_API = process.env.NEXT_PUBLIC_HOST_API;
export const ASSETS_API = process.env.NEXT_PUBLIC_BASE_PATH;

export const MAPBOX_API = process.env.NEXT_PUBLIC_MAPBOX_API;

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = paths.demo.root; // as '/demo'
