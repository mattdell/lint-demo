/**
 * @fileoverview This rule encourages the best practice method of importing a react bootstrap component
 * @author Matt
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/react-bootstrap-import');
const RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run('react-bootstrap-import', rule, {

	valid: [
		{
			code: 'import Jumbotron from \'react-bootstrap/lib/Jumbotron\'',
			parserOptions: {ecmaVersion: 6, sourceType: 'module'}
		}
	],

	invalid: [
		{
			code: 'import {Jumbotron} from \'react-bootstrap\';',
			parserOptions: {ecmaVersion: 6, sourceType: 'module'},
			errors: [{
				message: 'import Jumbotron from \'react-bootstrap/lib/Jumbotron\'',
				type: 'ImportDeclaration'
			}]
		}
	]
});
