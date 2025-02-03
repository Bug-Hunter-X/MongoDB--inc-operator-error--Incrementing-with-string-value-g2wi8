# MongoDB $inc Operator Error: Incrementing with String Value

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is used to increment a numerical field by a specific value.  However, attempting to increment with a string value will result in an error or unexpected behavior.

## Bug Description
The provided code attempts to increment the `counter` field using the `$inc` operator with a string value ('1'). This is incorrect; the `$inc` operator requires a numerical value.

## Solution
The solution is to provide a numerical value to the `$inc` operator, correcting the update operation to use a number instead of a string.