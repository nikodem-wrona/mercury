import { Request } from 'express';

export type CustomRequest = Request & { userId: string };

type JWTPayload = {
  sub: string;
  iat: number;
};

export const isJWTPayload = (payload: any): payload is JWTPayload =>
  typeof payload === 'object' &&
  typeof payload.sub === 'string' &&
  typeof payload.iat === 'number';
