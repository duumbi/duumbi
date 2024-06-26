export class ErrorBase<T extends string> extends Error {
    name: T;
    message: string;
    cause?: Error;

    constructor(name: T, message: string, cause?: Error) {
        super(message);
        this.name = name;
        this.message = message;
        this.cause = cause;
    }
}