import { EnvironmentInterface } from '../app/shared/interface/environment.interface';
import { environment } from './environment';

export default (): EnvironmentInterface => ({ ...environment });
