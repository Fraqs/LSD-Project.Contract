  
  
  
  
  
#  LSD Project Contract | GitHub NPM Module
  
  
_Large System Development, fall 2020_
  
**Stephan Duelund Djurhuus**
  
![cover image](/assets/cover.png?0.7652969573436041 )  
  
##  Content
  
  
- [Components](/#components )
- [Installation](/#installation )
- [Usage](/#usage )
  - [Contract Interface](/#contract-interface )
  - [Data Transfer Objects](/#data-transfer-objects )
  - [Error Transfer Objects](/#error-transfer-objects )
  - [Duck Typing](/#duck-typing )
    - [Interface Example](/#interface-example )
    - [Class Example](/#class-example )
  
##  Components
  
  
-   [Backend](https://github.com/Fraqs/LSD-Project.Backend ), Handles Database Management.
-   [Frontend](https://github.com/Fraqs/LSD-Project.Frontend ), Handles REST API and Server Sided Rendering.
-   [Contract](https://github.com/Fraqs/LSD-Project.Contract ), Handles Contract Interface & Data Transfer Objects.
-   [Project Wiki](https://github.com/Fraqs/LSD-Project.Contract/wiki ), Assignments & Descriptions
  
##  Installation
  
  
```bash
# bash
yarn add Fraqs/LSD-Project.Contract
```
  
> Installing dependencies after this may force you to reinstall it due to cached `yarn.lock` doesn't contain GitHub modules.
  
##  Usage
  
  
###  Contract Interface
  
  
Import contract interface.
  
```typescript
// typescript
import IContract from 'contract';
```
  
###  Data Transfer Objects
  
  
Import Data Transfer Objects.
  
```typescript
// typescript
import { IBookingDetail } from 'contract/dist/dto/booking';
```
  
> The `dto` folder contains a variety of entities, `booking` is just an example.
  
###  Error Transfer Objects
  
  
Import Error Transfer Objects.
  
```typescript
// typescript
import { NotFoundError } from 'contract/dist/eto';
```
  
###  Duck Typing
  
  
_"If it walks like a duck and it quacks like a duck, then it must be a duck"_
  
With duck typing objects doesn't have to be instantiated from a class. A simple `object` containing similar fields as the `class` or `interface` will be seen as an instance of it.
  
####  Interface Example
  
  
```typescript
// typescript
interface IPerson {
    name: string;
}
  
const p1: IPerson = { age: 123 }; // type error (missing field "name")
const p2: IPerson = { name: 'myName' }; // acceptable
```
  
####  Class Example
  
  
```typescript
// typescript
class Person {
    name: string;
  
    constructor(name: string) {
        this.name = name;
    }
}
  
const p1: Person = { age: 123 }; // type error (missing field "name")
const p2: Person = { name: 'myName' }; // acceptable
```
  
## 
  
  
Software Development @ Copenhagen Business Academy, Denmark 2020
  