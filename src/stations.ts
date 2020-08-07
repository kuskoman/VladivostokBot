import logger from "./logger";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const stations = new Map<string, string>();
const stationsDir = join(__dirname, "..", "stations/");

const parseStationsObject = (stationsObject: object): void => {
  for (const [key, value] of Object.entries(stationsObject)) {
    if (typeof key !== "string" || typeof value !== "string") {
      logger.error(
        `Wrong value in ${key}:${value}. Key and value must be strings.`
      );
      process.exit(1);
    }

    if (stations.has(key)) {
      logger.warn(`Overwriting ${key} with ${value}.`);
    }
    stations.set(key, value);
  }
};

const loadStationFiles = (): void => {
  const stationFileNames = getStationFiles();
  stationFileNames.forEach((path) => {
    try {
      const fileContent = readFileSync(join(stationsDir, path));
      const stationsObject = JSON.parse(fileContent.toString());
      parseStationsObject(stationsObject);
    } catch (e) {
      console.error(`Error when opening station file: ${e}`);
    }
  });
};

const getStationFiles = (): string[] => {
  return readdirSync(stationsDir);
};

loadStationFiles();
export default stations;
