/**
 * @fileoverview This rule encourages the best practice method of importing a react bootstrap component
 * @author Matt
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

	// variables should be defined here

	//--------------------------------------------------------------------------
	// Helpers
	//--------------------------------------------------------------------------

	// any helper functions should go here or else delete this section

	//--------------------------------------------------------------------------
	// Public
	//--------------------------------------------------------------------------

	return {

		// give me methods
		ImportDeclaration: function(node) {

			if (node.source.value !== 'react-bootstrap') {
				return;
			}

			const specifier = node.specifiers[0].local.name;

			context.report({
				node: node,
				message: `import ${specifier} from \'react-bootstrap\/lib/${specifier}'`,
			});
		}
	};

};

module.exports.schema = [
	// fill in your schema
];
