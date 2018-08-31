const superTest = require("supertest"),
  chai = require("chai"),
  app = require("../index.js"),
  request = superTest(app),
  expect = chai.expect;

global.app = app;
global.request = request;
global.expect = expect;