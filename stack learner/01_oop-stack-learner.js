// before oop
/**
 * 
 * topic: Disadvantages of procedural programming
 * Procedural programming is good, but there is some serious issue we face when we create software for real world. Mapping real world objects, data to programming seems really hard when it comes to procedural programming like C. 
 *  1. code is not reusable
 *  2. large code base is hard to manage
 *  3. difficult to tracing and fixing bugs
 *  4. data is exposed to whole program
 *  5. operation's priority is higher than data
 *  6. difficult to relate with real world data
 * 
 * 
 * 
 * ************Object Oriented Programming**************
 * Object Oriented Programming is all about object. Finding Object, it's properties and methods are the main mechanism of learning object oriented programming.
 * Class is a template/blueprint to create multiple objects.
 * 
 * -----Class Template------------------------------
 * Public String name
 * Public String email
 * Public String password
 * Public String username
 * 
 * 
 * User createUser(data){}
 * void login(data){}
 * void Logout(data){}
 * void resetPassword(data){}
 * 
 * 
 * ------------Creating an object-------------------
 * User user1 = new User('hello', 'hello@gmail.com', '!12sdf', 'hello12');
 * User user2 = new User('tanha', 'hello1@gmail.com', '!12sdd', 'hello13');
 * 
 * -------------------------------------------------
 * 
 */

// What is an Object?
/**
 * Whatever you can see near beside you is an object
 * 1. combination of Noun, Adjective(properties) & Verb(methods)
 * 2. has some private and public properties and/or has some functions which is called methods
 * 3. A capsule that can encapsulate data and operations
 * 4. is a custom data type
 * 5. an isolated environment for properties and methods
 * 
 */

// topic: Components of a Class
/**
 * 1. Constructor
 * 2. State (Properties/Attributes)
 * 3. Methods 
 * 4. Static States
 * 5. Static Methods
 */


/**
 * ********Four Main Pillar of OOP*************
 *imp: to implement these topics properly, we will need some additional features and techniques too which are language specific and not all language has the same ability to implement object oriented programming properly.
 Four pillars of OOP:
 * 1. Abstraction: Abstraction means hiding the implementation details inside and providing just the necessary API. We never know how it is working, we only know what to do.
 * 
 * 2. Encapsulation: The definition of encapsulation is 'the action of enclosing something is or as if in a capsule'. Encapsulation means that each object in your code should control its own state. State is the current 'snapshot' of your object.
 *  
 * 3. Inheritance: The ability of creating a new class from an existing class. Inheritance is when an object acquires the property of another object. Inheritance allows a class to acquire the properties and behavior of another class.
 * 
 * 4. Polymorphism: Polymorphism is derived from 2 greek words: poly and morphs. The word 'poly' means 'many' and 'morphs' means 'forms'. SO polymorphism means 'many forms'.
 */