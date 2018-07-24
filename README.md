
<!--#echo json="package.json" key="name" underline="=" -->
augmenterr
==========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Make some errors more helpful.
<!--/#echo -->


API
---

This module exports one function that has some methods:

### augmentError(err)

Augments err, in-place if possible.
Returns the augmented error.

### augmentError.re(err)

("re-throw")

Throws the augmented error.



Augmentations
-------------

### File system errors

* If `.path` is relative, add the current working directory as `.cwd`.



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
