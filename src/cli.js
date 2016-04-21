'use strict';

const flag = require('./flag');
(function(){
  var args = process.argv.slice(2);

  args.forEach((code) => {
    console.log(flag(code));
  });
})();
