import { environment } from '../../../config/environment';

export const jwtConstants = {
  secret: Buffer.from(environment.BASE64_SECRET, 'base64').toString('ascii'),
};
