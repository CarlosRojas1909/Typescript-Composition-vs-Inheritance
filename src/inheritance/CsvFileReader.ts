//we need to install type definition for node(same file for all modules in node) ...npm i @types/node
// import fs from "fs";`
import fs from "fs";

//making use of generics
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}
  //writing that our method is abstract, we are saying our methods is going to be implemeneted by a class child
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8" // telling to node to return a string , not a buffer
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
