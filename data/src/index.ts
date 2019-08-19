import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";

const csvFilereader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFilereader);
matchReader.load();

const summary = Summary.analysisWithReport('Man United');

summary.createAndPrintReport(matchReader.matches);