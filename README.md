underscore.d.ts
===============

This is a typescript definitions file for underscore.js.  The difference between this underscore.d.ts definitions is that the type annotations are more specific.  Each function declaration will provide basic type bindings (string, number, any and bool in some cases).  This provides the user with functions that do not require casting for basic types.


Notes
=====

2012.11.02 -- Implementing OOP wrapper through individual interfaces, one per object type.

2012.10.29 -- How to implement the OOP wrapper?
              ~~Each function is going to require its own set of definitions minus the first arg.~~

2012.10.24 -- Generics would be very useful, until typescript supports them I will be adding bindings
              for basic types, otherwise the Object or any type and casting will have to be done to
              allow a user to use custom classes.
              example now:
                  each(
                      list: string[], 
                      fn: (element: string, index?: number, list: string[]) => any,
                      context?: any): void;
              example with how generics could work:
                  T => The type of the elements in the Array
                  C => The type of the context object, would be optional ?? (might need 2 definitions)
                  each<T, C>(
                      list: T[],
                      fn: (el: T, index?: number, list: T[]) => T,
                      context?: C): void;
