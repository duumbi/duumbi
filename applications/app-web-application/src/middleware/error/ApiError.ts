import { ErrorBase } from "./errors";

type ErrorName =
    | "API_REQUEST_ERROR";

export class ApiError extends ErrorBase<ErrorName> { }