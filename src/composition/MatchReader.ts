import { dateStringToDate } from "../utils";
import { MatchResult } from "../MatchResult";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "../composition/CsvFileReader";

interface DataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  //Creating a static method for this class
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
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
    );
  }
}
