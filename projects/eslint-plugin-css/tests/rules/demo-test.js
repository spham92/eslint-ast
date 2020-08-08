'use strict';

const { RuleTester } = require('eslint');

const tester = new RuleTester({
  parser: `${__dirname}/../../eslint/parser.js`,
});

describe('example/demo-rule', function() {
  it('works', function(){
    tester.run(
      'example/demo-rule',
      require('../../eslint/rules/demo'),
      {
        valid: [
          `a { color: blue }`
        ],
        invalid: [
          {
            code: 'a { color: bubblegum; }',
            errors: [
              {
                type: 'Identifier',
                message: 'bad color'
              }
            ]
          }
        ]
      });
  });
});
