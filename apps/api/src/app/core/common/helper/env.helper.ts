import { existsSync } from 'fs';
import { resolve } from 'path';
import { EnvironmentEnum } from '../../../shared/enum/environment.enum';

export function getEnvPath(): string {
  const env: string | undefined =
    process.env.NODE_ENV || EnvironmentEnum.development;
  const filename: string = env
    ? `${env}.env`
    : `${EnvironmentEnum.development}.env`;
  let path = `${__dirname}/../envs`;
  switch (env) {
    case EnvironmentEnum.development:
      path = `apps/api/src/app/core/common/envs`;
      break;
    case EnvironmentEnum.production:
      path = `apps/api/src/app/core/common/envs`;
      break;
    default:
      path = `apps/api/src/app/core/common/envs`;
      break;
  }

  console.log(path);
  let filePath: string = resolve(`${path}/${filename}`);
  if (!existsSync(filePath)) {
    const fallback: string = resolve(`${path}/.env`);
    filePath = fallback;
  }

  return filePath;
}
