//     underscore.d.ts
//     (c) 2012 Josh Baldwin
//     underscore.d.ts may be freely distributed under the MIT license.
//     For all details and documentation:
//     https://github.com/jbaldwin/underscore.d.ts

/**
* Notes:
* 2012.10.24 -- Generics would be very useful, until typescript supports them I will be adding bindings
*               for basic types, otherwise the Object or any type and casting will have to be done to
*               allow a user to use custom classes.
*               example now:
*                   each(
*                       list: string[], 
*                       fn: (element: string, index?: number, list: string[]) => any,
*                       context?: any): void;
*               example with how generics could work:
*                   T => The type of the elements in the Array
*                   C => The type of the context object, would be optional ?? (might need 2 definitions)
*                   each<T, C>(
*                       list: T[],
*                       fn: (el: T, index?: number, list: T[]) => T,
*                       context?: C): void;
**/

interface Underscore {

	/**************
	* Collections *
	***************/

	/**
	* Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is
	* bound to the context object, if one is passed. Each invocation of iterator is called with three
	* arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be
	* (value, key, list). Delegates to the native forEach function if it exists.
	**/
	each(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => any,
		context?: any): void;
	each(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => any,
		context?: any): void;
	each(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): void;
	each(
		list: Object,
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): void;

	/**
	* Alias for 'each'.
	**/
	forEach(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => any,
		context?: any): void;
	forEach(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => any,
		context?: any): void;
	forEach(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): void;
	forEach(
		list: Object,
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): void;

	/**
	* Produces a new array of values by mapping each value in list through a transformation function
	* (iterator). If the native map method exists, it will be used instead. If list is a JavaScript
	* object, iterator's arguments will be (value, key, list).
	**/
	map(
		list: string[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): string[];
	map(
		list: number[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): number[];
	map(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): any[];
	map(
		list: Object,
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): any[];

	/**
	* Alias for 'map'.
	**/
	collect(
		list: string[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): string[];
	collect(
		list: number[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): number[];
	collect(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		context?: any): any[];
	collect(
		list: Object,
		iterator: (value: any, key?: string, object?: Object) => any,
		context?: any): any[];

	/**
	* Also known as inject and foldl, reduce boils down a list of values into a single value.
	* Memo is the initial state of the reduction, and each successive step of it should be
	* returned by iterator. The iterator is passed four arguments: the memo, then the value
	* and index (or key) of the iteration, and finally a reference to the entire list.
	**/
	reduce(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => string,
		memo: string,
		context?: any): string;
	reduce(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => number,
		memo: number,
		context?: any): number;
	reduce(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* Alias for 'reduce'.
	**/
	inject(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => string,
		memo: string,
		context?: any): string;
	inject(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => number,
		memo: number,
		context?: any): number;
	inject(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* Alias for 'reduce'.
	**/
	foldl(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => string,
		memo: string,
		context?: any): string;
	foldl(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => number,
		memo: number,
		context?: any): number;
	foldl(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* The right-associative version of reduce. Delegates to the JavaScript 1.8 version of
	* reduceRight, if it exists. Foldr is not as useful in JavaScript as it would be in a
	* language with lazy evaluation.
	**/
	reduceRight(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => string,
		memo: string,
		context?: any): string;
	reduceRight(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => number,
		memo: number,
		context?: any): number;
	reduceRight(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* Alias for 'reduceRight'.
	**/
	foldr(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => string,
		memo: string,
		context?: any): string;
	foldr(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => number,
		memo: number,
		context?: any): number;
	foldr(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => any,
		memo: any,
		context?: any): any;

	/**
	* Looks through each value in the list, returning the first one that passes a truth
	* test (iterator). The function returns as soon as it finds an acceptable element,
	* and doesn't traverse the entire list.
	**/
	find(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => bool,
		context?: any): string;
	find(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => bool,
		context?: any): number;
	find(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any;

	/**
	* Alias for 'find'.
	**/
	detect(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => bool,
		context?: any): string;
	detect(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => bool,
		context?: any): number;
	detect(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any;


	/**
	* Looks through each value in the list, returning an array of all the values that pass a truth
	* test (iterator). Delegates to the native filter method, if it exists.
	**/
	filter(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => bool,
		context?: any): string[];
	filter(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => bool,
		context?: any): number[];
	filter(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any[];

	/**
	* Alias for 'filter'.
	**/
	select(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => bool,
		context?: any): string[];
	select(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => bool,
		context?: any): number[];
	select(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any[];

	/**
	* Looks through each value in the list, returning an array of all the values that contain all
	* of the key-value pairs listed in properties.
	**/
	where(list: Object[], properties: Object): Object[];

	/**
	* Returns the values in list without the elements that the truth test (iterator) passes.
	* The opposite of filter.
	**/
	reject(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => bool,
		context?: any): string[];
	reject(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => bool,
		context?: any): number[];
	reject(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): any[];

	/**
	* Returns true if all of the values in the list pass the iterator truth test. Delegates to the
	* native method every, if present.
	**/
	all(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => bool,
		context?: any): bool;
	all(
		list: number[],
		iterator: (element: number, index?: number, list?: string[]) => bool,
		context?: any): bool;
	all(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): bool;

	/**
	* Alias for 'all'.
	**/
	every(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => bool,
		context?: any): bool;
	every(
		list: number[],
		iterator: (element: number, index?: number, list?: string[]) => bool,
		context?: any): bool;
	every(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): bool;

	/**
	* Returns true if any of the values in the list pass the iterator truth test. Short-circuits and
	* stops traversing the list if a true element is found. Delegates to the native method some, if present.
	**/
	any(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => bool,
		context?: any): bool;
	any(
		list: number[],
		iterator: (element: number, index?: number, list?: string[]) => bool,
		context?: any): bool;
	any(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): bool;

	/**
	* Alias for 'any'.
	**/
	some(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => bool,
		context?: any): bool;
	some(
		list: number[],
		iterator: (element: number, index?: number, list?: string[]) => bool,
		context?: any): bool;
	some(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => bool,
		context?: any): bool;

	/**
	* Returns true if the value is present in the list. Uses indexOf internally,
	* if list is an Array.
	**/
	contains(list: string[], value: string): bool;
	contains(list: number[], value: number): bool;
	contains(list: any[], value: any): bool;

	/**
	* Alias for 'contains'.
	**/
	include(list: string[], value: string): bool;
	include(list: number[], value: number): bool;
	include(list: any[], value: any): bool;

	/**
	* Calls the method named by methodName on each value in the list. Any extra arguments passed to
	* invoke will be forwarded on to the method invocation.
	**/
	invoke(list: any[], methodName: string, ...arguments: any[]): void;

	/**
	* A convenient version of what is perhaps the most common use-case for map: extracting a list of
	* property values.
	**/
	pluck(list: Object[], propertyName: string): any[];

	/**
	* Returns the maximum value in list. If iterator is passed, it will be used on each value to generate
	* the criterion by which the value is ranked.
	**/
	max(list: number[]): number;
	max(
		list: Object[],
		iterator: (element: Object, index?: number, list?: Object[]) => number,
		context?: any): Object;

	/**
	* Returns the minimum value in list. If iterator is passed, it will be used on each value to generate
	* the criterion by which the value is ranked.
	**/
	min(list: number[]): number;
	min(
		list: Object[],
		iterator: (obj: Object, index?: number, list?: Object[]) => number,
		context?: any): Object;

	/**
	* Returns a sorted copy of list, ranked in ascending order by the results of running each value
	* through iterator. Iterator may also be the string name of the property to sort by (eg. length).
	**/
	sortBy(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => number,
		context?: any): any[];
	sortBy(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => number,
		context?: any): any[];
	sortBy(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => number,
		context?: any): any[];
	sortBy(
		list: string[],
		iterator: string,
		context?: any): string[];
	sortBy(
		list: number[],
		iterator: string,
		context?: any): number[];
	sortBy(
		list: any[],
		iterator: string,
		context?: any): any[];

	/**
	* Splits a collection into sets, grouped by the result of running each value through iterator.
	* If iterator is a string instead of a function, groups by the property named by iterator on
	* each of the values.
	**/
	groupBy(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => string,
		context?: any): { [key: string]: string[]; };
	groupBy(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => string,
		context?: any): { [key: string]: number[]; };
	groupBy(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => string,
		context?: any): { [key: string]: any[]; };
	groupBy(
		list: string[],
		iterator: string,
		context?: any): { [key: string]: string[]; };
	groupBy(
		list: number[],
		iterator: string,
		context?: any): { [key: string]: number[]; };
	groupBy(
		list: any[],
		iterator: string,
		context?: any): { [key: string]: any[]; };

	/**
	* Sorts a list into groups and returns a count for the number of objects in each group. Similar
	* to groupBy, but instead of returning a list of values, returns a count for the number of values
	* in that group.
	**/
	countBy(
		list: string[],
		iterator: (element: string, index?: number, list?: string[]) => string,
		context?: any): { [key: string]: number };
	countBy(
		list: number[],
		iterator: (element: number, index?: number, list?: number[]) => string,
		context?: any): { [key: string]: number; };
	countBy(
		list: any[],
		iterator: (element: any, index?: number, list?: any[]) => string,
		context?: any): { [key: string]: number; };
	countBy(
		list: string[],
		iterator: string,
		context?: any): { [key: string]: number; };
	countBy(
		list: number[],
		iterator: string,
		context?: any): { [key: string]: number; };
	countBy(
		list: any[],
		iterator: string,
		context?: any): { [key: string]: number; };

	/**
	* Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.
	**/
	shuffle(list: string[]): string[];
	shuffle(list: number[]): number[];
	shuffle(list: any[]): any[];

	/**
	* Converts the list (anything that can be iterated over), into a real Array. Useful for transmuting
	* the arguments object.
	**/
	toArray(list: any): any[];

	/**
	* Return the number of values in the list.
	**/
	size(list: any): number;

	/*********
	* Arrays *
	**********/

	/**
	* Returns the first element of an array. Passing n will return the first n elements of the array.
	**/
	first(array: string[]): string;
	first(array: string[], n: number): string[];
	first(array: number[]): number;
	first(array: number[], n: number): number[];
	first(array: any[]): any;
	first(array: any[], n: number): any[];

	/**
	* Alias for 'first'.
	**/
	head(array: string[]): string;
	head(array: string[], n: number): string[];
	head(array: number[]): number;
	head(array: number[], n: number): number[];
	head(array: any[]): any;
	head(array: any[], n: number): any[];

	/**
	* Alias for 'first'.
	**/
	take(array: string[]): string;
	take(array: string[], n: number): string[];
	take(array: number[]): number;
	take(array: number[], n: number): number[];
	take(array: any[]): any;
	take(array: any[], n: number): any[];

	/**
	* Returns everything but the last entry of the array. Especially useful on the arguments object.
	* Pass n to exclude the last n elements from the result.
	**/
	initial(array: string[], n?: number): string[];
	initial(array: number[], n?: number): number[];
	initial(array: any[], n?: number): any[];

	/**
	* Returns the last element of an array. Passing n will return the last n elements of the array.
	**/
	last(array: string[]): string;
	last(array: string[], n: number): string[];
	last(array: number[]): number;
	last(array: number[], n: number): number[];
	last(array: any[]): any;
	last(array: any[], n: number): any[];

	/**
	* Returns the rest of the elements in an array. Pass an index to return the values of the array
	* from that index onward.
	**/
	rest(array: string[], index?: number): string[];
	rest(array: number[], index?: number): number[];
	rest(array: any[], index?: number): any[];

	/**
	* Alias for 'rest'.
	**/
	tail(array: string[], index?: number): string[];
	tail(array: number[], index?: number): number[];
	tail(array: any[], index?: number): any[];

	/**
	* Alias for 'rest'.
	**/
	drop(array: string[], index?: number): string[];
	drop(array: number[], index?: number): number[];
	drop(array: any[], index?: number): any[];

	/**
	* Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "",
	* undefined and NaN are all falsy.
	**/
	compact(array: string[]): string[];
	compact(array: number[]): number[];
	compact(array: bool[]): bool[];
	compact(array: any[]): any[];

	/**
	* Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will
	* only be flattened a single level.
	**/
	flatten(array: string[], shallow?: bool): string[];
	flatten(array: number[], shallow?: bool): number[];
	flatten(array: any[], shallow?: bool): any[];

	/**
	* Returns a copy of the array with all instances of the values removed.
	**/
	without(array: string[], ...values: string[]): string[];
	without(array: number[], ...values: number[]): number[];
	without(array: any[], ...values: any[]): any[];

	/**
	* Computes the union of the passed-in arrays: the list of unique items, in order, that are
	* present in one or more of the arrays.
	**/
	union(...arrays: string[][]): string[];
	union(...arrays: number[][]): number[];
	union(...arrays: any[][]): any[];

	/**
	* Computes the list of values that are the intersection of all the arrays. Each value in the result
	* is present in each of the arrays.
	**/
	intersection(...arrays: string[][]): string[];
	intersection(...arrays: number[][]): number[];
	intersection(...arrays: any[][]): any[];

	/**
	* Similar to without, but returns the values from array that are not present in the other arrays.
	**/
	difference(array: string[], ...others: string[]): string[];
	difference(array: number[], ...others: number[]): number[];
	difference(array: any[], ...others: any[]): any[];

	/**
	* Produces a duplicate-free version of the array, using === to test object equality. If you know in
	* advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If
	* you want to compute unique items based on a transformation, pass an iterator function.
	**/
	uniq(array: string[], isSorted?: bool, iterator?: (element: string, index?: number, list?: string[]) => string): string[];
	uniq(array: number[], isSorted?: bool, iterator?: (element: number, index?: number, list?: number[]) => number): number[];
	uniq(array: any[], isSorted?: bool, iterator?: (element: any, index?: number, list?: any[]) => any): any[];

	/**
	* Alias for 'uniq'.
	**/
	unique(array: string[], isSorted?: bool, iterator?: (element: string, index?: number, list?: string[]) => string): string[];
	unique(array: number[], isSorted?: bool, iterator?: (element: number, index?: number, list?: number[]) => number): number[];
	unique(array: any[], isSorted?: bool, iterator?: (element: any, index?: number, list?: any[]) => any): any[];

	/**
	* Merges together the values of each of the arrays with the values at the corresponding position.
	* Useful when you have separate data sources that are coordinated through matching array indexes.
	* If you're working with a matrix of nested arrays, zip.apply can transpose the matrix in a similar fashion.
	**/
	zip(...arrays: string[][]): string[][];
	zip(...arrays: number[][]): number[][];
	zip(...arrays: any[][]): any[][];

	/**
	* Converts arrays into objects. Pass either a single list of [key, value] pairs, or a
	* list of keys, and a list of values.
	**/
	object(keys: string[], values: any[]): Object;
	object(...keyValuePairs: any[][]): Object;

	/**
	* Returns the index at which value can be found in the array, or -1 if value is not present in the array.
	* Uses the native indexOf function unless it's missing. If you're working with a large array, and you know
	* that the array is already sorted, pass true for isSorted to use a faster binary search ... or, pass a number
	* as the third argument in order to look for the first matching value in the array after the given index.
	**/
	indexOf(array: string[], value: string, isSorted?: bool): number;
	indexOf(array: number[], value: number, isSorted?: bool): number;
	indexOf(array: any[], value: any,isSorted?: bool): number;

	/**
	* Returns the index of the last occurrence of value in the array, or -1 if value is not present. Uses the
	* native lastIndexOf function if possible. Pass fromIndex to start your search at a given index.
	**/
	lastIndexOf(array: string[], value: string, isSorted?: bool): number;
	lastIndexOf(array: number[], value: number, isSorted?: bool): number;
	lastIndexOf(array: any[], value: any,isSorted?: bool): number;

	/**
	* Uses a binary search to determine the index at which the value should be inserted into the list in order
	* to maintain the list's sorted order. If an iterator is passed, it will be used to compute the sort ranking
	* of each value, including the value you pass.
	**/
	sortedIndex(list: string[], value: string, iterator?: (element: string) => number): number;
	sortedIndex(list: number[], value: number, iterator?: (element: number) => number): number;
	sortedIndex(list: any[], value: any, iterator?: (element: any) => number): number;

	/**
	* A function to create flexibly-numbered lists of integers, handy for each and map loops. start, if omitted,
	* defaults to 0; step defaults to 1. Returns a list of integers from start to stop, incremented (or decremented)
	* by step, exclusive.
	**/
	range(start: number, stop: number, step?: number): number[];
	// If start is not specified the implementation will never pull the step (step = arguments[2] || 0)
	range(stop: number): number[];

	/************
	* Functions *
	*************/

	/**
	* Bind a function to an object, meaning that whenever the function is called, the value of this will
	* be the object. Optionally, bind arguments to the function to pre-fill them, also known as partial application.
	**/
	bind(fn: Function, object: any, ...arguments: any[]): Function;


	/**
	* Binds a number of methods on the object, specified by methodNames, to be run in the context of that object
	* whenever they are invoked. Very handy for binding functions that are going to be used as event handlers,
	* which would otherwise be invoked with a fairly useless this. If no methodNames are provided, all of the
	* object's function properties will be bound to it.
	**/
	bindAll(object: any, ...methodNames: string[]): void;

	/**
	* Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations.
	* If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based
	* on the arguments to the original function. The default hashFunction just uses the first argument to the
	* memoized function as the key.
	**/
	memoize(fn: Function, hashFn?: (n: any) => string): Function;

	/**
	* Much like setTimeout, invokes function after wait milliseconds. If you pass the optional arguments,
	* they will be forwarded on to the function when it is invoked.
	**/
	delay(fn: Function, waitMS: number, ...arguments: any[]): void;

	/**
	* Defers invoking the function until the current call stack has cleared, similar to using setTimeout
	* with a delay of 0. Useful for performing expensive computations or HTML rendering in chunks without
	* blocking the UI thread from updating. If you pass the optional arguments, they will be forwarded on
	* to the function when it is invoked.
	**/
	defer(fn: Function, ...arguments: any[]): void;

	/**
	* Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly,
	* will only actually call the original function at most once per every wait milliseconds. Useful for
	* rate-limiting events that occur faster than you can keep up with.
	**/
	throttle(fn: Function, waitMS: number): Function;

	/**
	* Creates and returns a new debounced version of the passed function that will postpone its execution
	* until after wait milliseconds have elapsed since the last time it was invoked. Useful for implementing
	* behavior that should only happen after the input has stopped arriving. For example: rendering a preview
	* of a Markdown comment, recalculating a layout after the window has stopped being resized, and so on.
	*
	* Pass true for the immediate parameter to cause debounce to trigger the function on the leading instead
	* of the trailing edge of the wait interval. Useful in circumstances like preventing accidental double
	*-clicks on a "submit" button from firing a second time.
	**/
	debounce(fn: Function, waitMS: number, immediate?: bool): Function;

	/**
	* Creates a version of the function that can only be called one time. Repeated calls to the modified
	* function will have no effect, returning the value from the original call. Useful for initialization
	* functions, instead of having to set a boolean flag and then check it later.
	**/
	once(fn: Function): Function;

	/**
	* Creates a version of the function that will only be run after first being called count times. Useful
	* for grouping asynchronous responses, where you want to be sure that all the async calls have finished,
	* before proceeding.
	**/
	after(count: number, fn: Function): Function;

	/**
	* Wraps the first function inside of the wrapper function, passing it as the first argument. This allows
	* the wrapper to execute code before and after the function runs, adjust the arguments, and execute it
	* conditionally.
	**/
	wrap(fn: Function, wrapper: (fn: Function, ...args: any[]) => any): Function;

	/**
	* Returns the composition of a list of functions, where each function consumes the return value of the
	* function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
	**/
	compose(...functions: Function[]): Function;


	/**********
	* Objects *
	***********/

	/**********
	* Utility *
	***********/

	/***********
	* Chaining *
	************/
}

declare var _: Underscore;
