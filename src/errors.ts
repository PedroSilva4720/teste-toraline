export class InternalServerError extends Error {
  constructor(public message: string, public readonly statusCode: number) {
    super(message);
  }
}

export class BadRequestError extends InternalServerError {
  constructor(public message: string) {
    super(message, 400);
  }
}
