import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "../utils";
import { MatchResult } from "../MatchResult";

//Creating a Tuple(the order of each element is very important and the core of a tuple)
type MatchData = [Date, string, string, number, number, MatchResult, string];

//Adding the generic notation to this child class
export class MatchReader extends CsvFileReader<MatchData> {
  //Method
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // this is called type assertion in ts, it says row[5] can be A, H or D
      row[6]
    ];
  }
}
