import { MatchResult } from "../MatchResult";

//Creating a Tuple(the order of each element is very important and the core of a tuple)
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
