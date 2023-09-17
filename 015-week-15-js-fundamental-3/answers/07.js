// Program using a Map to store user information
const userMap = new Map();

function addUser(name, age, email) {
  const userInfo = { age, email };
  userMap.set(name, userInfo);
}

function updateUser(name, age, email) {
  if (userMap.has(name)) {
    const userInfo = userMap.get(name);
    userInfo.age = age;
    userInfo.email = email;
  }
}

function deleteUser(name) {
  userMap.delete(name);
}

addUser("Alice", 30, "alice@example.com");
addUser("Bob", 25, "bob@example.com");
console.log(userMap);

updateUser("Alice", 31, "newemail@example.com");
console.log(userMap);

deleteUser("Bob");
console.log(userMap);
