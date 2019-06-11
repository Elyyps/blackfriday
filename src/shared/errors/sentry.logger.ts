import BaseError from "./base-error";
import ILogger from "./logger.interface";
// tslint:disable-next-line: variable-name no-var-requires
import Raven from "raven-js";
import { getConfig } from "@app/util";

export default class SentryLogger implements ILogger {
  /**
   * Initialize the sentry logging service.
   * This should always be called before logging an error
   */
  public init(): void {
    Raven.config(getConfig().SENTY_URL).install();
  }

  /**
   * Log the error to the sentry service
   * @param error An error that implements the IError schema
   */
  public log(error: BaseError): void {
    // Rewrite the BaseError to a native Error class
    // Otherwise Sentry.io does not recognize the error
    const nativeError = new Error();

    nativeError.name = error.getName();
    if (typeof error.getMessage() !== "undefined") {
      nativeError.message = error.getMessage() as string;
    }
    if (typeof error.getStack() !== "undefined") {
      nativeError.stack = error.getStack() as string;
    }

    Raven.captureException(new Error(error.getMessage()));
  }
}
