const superTest = require("supertest"),
  chai = require("chai");

global.app = require("../index.js");
global.request = superTest(app);
global.expect = chai.expect;