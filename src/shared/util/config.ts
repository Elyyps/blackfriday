export interface IConfig {
  BASE_URL: string;
  API_URL: string;
  SENTY_URL: string;
}

export const isDevelopment = () => {
  return true;
  // const Config = require("Config");

  // return Config["IS_DEVELOPMENT"];
};

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    appConfig: any;
  }
}

// window.appConfig = window.appConfig || {};

export const getConfig = (): IConfig => {
  // const config = window.appConfig;

  return {
    API_URL: "http://localhost:5000",
    BASE_URL: "https://terrasana.com",
    SENTY_URL: "https://8c44bbeee82d48ac8730fdc7bf77ecdf@sentry.io/1460077"
  };
};
