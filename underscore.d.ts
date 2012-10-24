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
	* Converts the list (anything that can be iterated over), into a real Array. Useful for transmuting the arguments object.
	**/
	toArray(list: any): any[];

	/**
	* Return the number of values in the list.
	**/
	size(list: any): number;
}

declare var _: Underscore;
