import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleNameMapper: {
    '^@test/(.*)$': '<rootDir>/test/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  roots: ['<rootDir>'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['src/**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};

export default config;
