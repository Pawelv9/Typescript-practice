import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/consoleReport";
import { Summary } from "./Summary";

const csvFilereader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFilereader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.createAndPrintReport(matchReader.matches);