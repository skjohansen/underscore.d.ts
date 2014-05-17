underscore.d.ts
===============

This is a typescript definitions file for underscore.js.

This is also hosted on https://github.com/borisyankov/DefinitelyTyped If you found this via DefinitelyTyped use @jbaldwin or open an issue here so I will see the problem, otherwise it might not be noticed ;-)

Change log
========

v1.6.0 - 2014/05/17
---------

* Updated to TypeScript v1.0.1
* Added _.partition, a way to split a collection into two lists of results -- those that pass and those that fail a particular predicate.
* Added _.property, for easy creation of iterators that pull specific properties from objects.
* Added _.matches, a function that will give you a predicate that can be used to tell if a given object matches a list of specified key/value properties.
* Added _.constant, as a higher-order _.identity.
* Added _.now, an optimized way to get a timestamp -- used internally to speed up debounce and throttle.
* The _.each function now returns the original iterated list (just like it used to), for better chaining.

v1.5.2 - 2013/09/20
---------

* Updated to TypeScript v0.9.1.1
* Added _.indexBy, like _.groupBy but used when keys are known to be unique.
* Added _.sample, provides a random sample of elements in a collection.

v1.4.4 - 2013/06/28
---------

* Updated to TypeScript v0.9.
* Added Generics Support

v1.4.4 - 2013/02/10
---------

* Added _.findWhere, for finding the first element in a list that matches a particular set of keys and values.
* Added _.partial, for partially applying a function without changing its dynamic reference to this.

v1.4.3 - 2013/02/10
---------

* The uniq function can now take `array, iterator, context` as the argument list.
* The times function now returns the mapped array of iterator results.

v1.4.2
---------
Initial version


License
=======

See the repository at https://github.com/borisyankov/DefinitelyTyped/blob/master/underscore/underscore.d.ts for licensing information.
