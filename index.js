const express = require('express'),
  consign = require('consign'),
  app = express();

consign({verbose : false})
  .include('libs/middlewares.js')
  .then('routes')
  .then('/libs/boot.js')
  .into(app);
