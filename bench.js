import Benchmark from "benchmark";

import { hiMom as originalHiMom } from "hi-mom";
import { hiMom as fasterHiMom } from "./index.js";

const suite = new Benchmark.Suite("hi-mom");

suite
  .add("hi-mom no args", () => {
    originalHiMom();
  })
  .add("faster-hi-mom no args", () => {
    fasterHiMom();
  })
  .add("hi-mom with custom-name", () => {
    originalHiMom("mama");
  })
  .add("faster-hi-mom with custom-name", () => {
    fasterHiMom("mama");
  })
  .on("cycle", function(event) {
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ "async": true });
