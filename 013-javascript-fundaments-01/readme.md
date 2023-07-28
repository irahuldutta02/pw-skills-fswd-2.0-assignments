### My Profile Links : [rahuldutta.bio.link](https://rahuldutta.bio.link)

---

# 013-javascript-fundaments-01

# [Question :](./questions/01.pdf)

## **ANSWER :**

### 1.

`INPUT`

```javascript
let totalValue = 2000;
let discountParcentage = 20;

console.log(
  "The final price after discount is ",
  totalValue - (totalValue * discountParcentage) / 100
);
```

`OUTPUT`

```
The final price after discount is  1600
```

### 2.

`INPUT`

```javascript
let userName = "admin";
let password = "12345";

if (userName == "admin" && password == "12345"){
    console.log("Login Succesful");
}else{
    console.log("Invalid Cridencial");
}
```

`OUTPUT`

```
Login Succesful
```

### 3.

`INPUT`

```javascript
let INR = 850;
let USD = INR/82;

console.log(INR," INR is ", USD," USD");
```

`OUTPUT`

```
850  INR is  10.365853658536585  USD
```

### 4.

`INPUT`

```javascript
let numberOfChilds = 2;
let numberOfAdu1ts = 1;
let numberOfSeniors = 1;

console.log("Total ticket price is ", ((numberOfChilds*100)+(numberOfAdu1ts*150)+(numberOfSeniors*120)));
```

`OUTPUT`

```
Total ticket price is  470
```

### 5.

`INPUT`

```javascript
let typeOfPackage = "overnight";

switch (typeOfPackage) {
  case "standard":
    console.log("3-5 days");
    break;

  case "express":
    console.log("1-2 days");
    break;

  case "overnight":
    console.log("next day");
    break;

  default:
    console.log("Invalid Input");
    break;
}
```

`OUTPUT`

```
next day
```

### 6.

`INPUT`

```javascript
let Name = "mithun";
let Email = "mithun.s@pw.live";
let Age = "21";

if(typeof Name !== 'string'){
    console.log("Name should be String");
}

if(typeof Email !== 'string'){
    console.log("Email should be String");
}

if(typeof Age !== 'number'){
    console.log("Age should be Number");
}
```

`OUTPUT`

```
Age should be Number
```

### 7.

`INPUT`

```javascript
const shoppingList = ["Apples", "Bananas", "Milk", "Bread", "Eggs"];

for (let i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i]);
}
```

`OUTPUT`

```
Apples
Bananas
Milk
Bread
Eggs
```

### 8.

`INPUT`

```javascript
let count = 0;

console.log("Count From 0 to 10 : ");
while (count <= 10) {
  console.log(count);
  count++;
}

```

`OUTPUT`

```
Count From 10 to 0 : 
0
1
2
3
4
5
6
7
8
9
10
```

### 9.

`INPUT`

```javascript
const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    console.log("Found the First String:", arr[i]);
    break;
  }
}
```

`OUTPUT`

```
Found the First String: Mithun
```

### 10.

`INPUT`

```javascript
let arr = [10, -5, 20, -8, 15, -3, 0, 12, -1];

console.log("All positive numbers are : ");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(arr[i]);
  }
}

```

`OUTPUT`

```
All positive numbers are : 
10
20
15
12
```