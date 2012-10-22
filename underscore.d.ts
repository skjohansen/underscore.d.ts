//     underscore.d.ts
//     (c) 2012 Josh Baldwin
//     underscore.d.ts may be freely distributed under the MIT license.
//     For all details and documentation:
//     https://github.com/jbaldwin/underscore.d.ts

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


	all(
		list: any[],
		iterator: (element: string, index?: number, list?: any[]) => bool,
		context?: any): bool;

	every(
		list: any[],
		iterator: (element: string, index?: number, list?: any[]) => bool,
		context?: any): bool;
}

declare var _: Underscore;