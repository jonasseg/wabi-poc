import * as dotenv from 'dotenv';
import { getEnvPath } from '../app/core/common/helper/env.helper';
import { EnvironmentInterface } from '../app/shared/interface/environment.interface';
dotenv.config({ path: getEnvPath() });

export const environment: EnvironmentInterface = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT, 10) || 3000,
  ORIGIN: ['http://localhost:4200'],
  BASE64_SECRET: process.env.BASE64_SECRET || 'YWJj',
};
