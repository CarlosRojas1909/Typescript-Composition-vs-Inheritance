import { CsvFileReader } from "./composition/CsvFileReader";
import { MatchReader } from "./composition/MatchReader";
import { Summary } from "./composition/Summary";

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysysWithHtmlReport("Man United");

matchReader.load();

// all out data right at this point is at matchReader.matches
summary.buidAndPrintReport(matchReader.matches);
