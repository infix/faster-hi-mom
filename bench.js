import Benchmark from "benchmark";

import names from "./names.js";

import { hiMom as originalHiMom } from "hi-mom";
import { hiMom as fasterHiMom } from "./index.js";

const suite = new Benchmark.Suite("hi-mom");


const length = 10_000;
const namesArr = new Array(10_000).fill(undefined).map(() => names[Math.floor(Math.random() * names.length)]);

let i = 0;

const opts = {
  onStart() {
    i = 0;
  },
};

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
  .add(`hi-mom with ${length} names`, () => {
    originalHiMom(namesArr[i++ % length]);
  }, opts)
  .add(`faster-hi-mom with ${length} names`, () => {
    fasterHiMom(namesArr[i++ % length]);
  }, opts)
  .on("cycle", function(event) {
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ "async": true });
