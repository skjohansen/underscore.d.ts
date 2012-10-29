underscore.d.ts
===============

This is a typescript definitions file for underscore.js.  The difference between this underscore.d.ts definitions is that the type annotations are more specific.  Each function declaration will provide basic type bindings (string, number, any and bool in some cases).  This provides the user with functions that do not require casting for basic types.


Generics
========

There is a sample at the top of underscore.d.ts on how generics could work with this library.  Since typescript does not support generics yet each function is declared multiple times for each basic type binding.