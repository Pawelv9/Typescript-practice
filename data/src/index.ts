import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.analysisWithReport('Man United');
summary.createAndPrintReport(matchReader.matches);