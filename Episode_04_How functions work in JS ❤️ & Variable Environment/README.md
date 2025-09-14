# Episode 4: Functions and Variable Environments (Summary)

## 📌 Key Points
- **Hoisting** → Variables & functions are hoisted to the top.  
- **Scopes** → Local (inside function) vs Global (outside).  
- **Execution Contexts** →  
  - GEC (Global Execution Context)  
  - EC (Local Execution Context per function call)  
- **Call Stack** → Manages contexts (LIFO order).  

---

## 📌 Example
```js
var x = 1;

a();
b();

console.log(x); // 1

function a() {
  var x = 10;
  console.log(x); // 10
}

function b() {
  var x = 100;
  console.log(x); // 100
}
```

### 👉 Output
```
10
100
1
```

---

## 📌 Execution Flow
1. GEC created → `x = undefined`, functions hoisted.  
2. `x = 1` assigned.  
3. `a()` runs → local `x = 10` → prints 10 → EC destroyed.  
4. `b()` runs → local `x = 100` → prints 100 → EC destroyed.  
5. Back to global → prints `1`.  

---

## 🎯 Interview Q&A (Quick Review)
- **Output?** → `10, 100, 1`  
- **Why call functions before declaration?** → Hoisting  
- **Local vs Global variables?** → Separate contexts  
- **Role of Call Stack?** → Tracks execution (LIFO)  
- **After function ends?** → Local EC removed  
