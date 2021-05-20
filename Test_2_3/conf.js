// An example configuration file.
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }],

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  onPrepare: function() {
    require("ts-node").register({
      project: require("path").join(__dirname, './tsconfig.json'), // Relative path of tsconfig.json file
  });
  },

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  suites: {
    dhaka: './Tests/dhaka.spec.ts',
    chattogram: './Tests/chattogram.spec.ts',   
    
   

  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
