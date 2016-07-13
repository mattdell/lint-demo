/**
 * @fileoverview I&#39;m showing people how to make a linter!
 * @author Matt
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



