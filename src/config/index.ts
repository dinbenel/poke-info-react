import { devConfig } from "./dev.config";
import { prodConfig } from "./prod.config";

export const appConfig =
  process?.env?.NODE_ENV === "production" ? prodConfig : devConfig;
