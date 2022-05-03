import { Config } from '@jest/types';
import baseConfig from './jest.config';

const e2eConfig: Config.InitialOptions = {
  ...baseConfig,
  testRegex: '.e2e-spec.ts$',
  roots: ['<rootDir>/test'],
};

export default e2eConfig;
