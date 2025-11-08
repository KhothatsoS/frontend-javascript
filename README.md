# 📘 TypeScript Basics
This document provides an overview of basic TypeScript concepts, including types, interfaces, classes, DOM manipulation, generics, namespaces, declaration merging, ambient namespaces, and nominal typing.

---

## 🧩 Basic Types in TypeScript
TypeScript adds type safety to JavaScript by allowing you to declare variable types.
```html
let isDone: boolean = true;
let age: number = 25;
let name: string = "Khothatso";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
```
Example:
```html
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```
---

## 🧱 Interfaces, Classes, and Functions
### Interfaces
Interfaces define the structure of an object.
```html
interface Person {
  name: string;
  age: number;
}

function greetPerson(person: Person): void {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}
```
### Classes
Classes bring object-oriented programming to TypeScript.
```html
class Student {
  constructor(public name: string, public grade: number) {}

  study(): void {
    console.log(`${this.name} is studying.`);
  }
}

const student1 = new Student("Lerato", 90);
student1.study();
```
### Functions
Functions can have explicit parameter and return types.
```html
function add(a: number, b: number): number {
  return a + b;
}
```
---

## 🌐 Working with the DOM and TypeScript
TypeScript helps you safely access and manipulate DOM elements.
```html
const button = document.querySelector("button") as HTMLButtonElement;

button.addEventListener("click", () => {
  alert("Button clicked!");
});
```
TypeScript ensures `button` is not `null` and has the correct type.

---

## 🧮 Generic Types
Generics allow you to write reusable, type-safe components.
```html
function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(5);
let str = identity<string>("hello");
```
Generic Interfaces:
```html
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "Text" };
```
---

## 🏷️ Namespaces
Namespaces group related code and avoid name collisions.
```html
namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3)); // 8
```
----

## 🔄 Merging Declarations
TypeScript can merge multiple declarations with the same name.
```html
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = { name: "Thabo", age: 28 };
```
Both interfaces merge into a single type `{ name: string; age: number }`.

---
## 🌍 Ambient Namespaces and External Libraries
Ambient namespaces allow you to use external JavaScript libraries by declaring their types.
```html
declare namespace jQuery {
  function ajax(url: string): void;
}

// Usage
jQuery.ajax("https://api.example.com/data");
```
These are often stored in `.d.ts` (declaration) files.

---

## 🧠 Basic Nominal Typing in TypeScript
TypeScript uses *structural typing* by default, but you can simulate nominal typing using unique symbols or branded types.
```html
type UserID = string & { readonly brand: unique symbol };
type ProductID = string & { readonly brand: unique symbol };

function getUser(id: UserID) {
  console.log(`User ID: ${id}`);
}

let userId = "abc123" as UserID;
let productId = "xyz789" as ProductID;

// getUser(productId); ❌ Type error
getUser(userId); ✅
```
This ensures types are not interchangeable even if they have the same structure.

# Summary:

| Concept                 | Description                                   |
| ----------------------- | --------------------------------------------- |
| **Basic Types**         | Define variables with specific data types     |
| **Interfaces**          | Define the structure of objects               |
| **Classes**             | Create reusable OOP structures                |
| **Functions**           | Define input and output types                 |
| **DOM + TS**            | Safe DOM element access                       |
| **Generics**            | Reusable, type-safe code                      |
| **Namespaces**          | Organize and isolate code                     |
| **Declaration Merging** | Combine multiple interface definitions        |
| **Ambient Namespace**   | Use external libraries safely                 |
| **Nominal Typing**      | Enforce unique identity between similar types |

                                                  Created by @Khothatso Sibasa
