//we need to install type definition for node(same file for all modules in node) ...npm i @types/node
// import fs from "fs";`
import fs from "fs";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8" // telling to node to return a string , not a buffer
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
