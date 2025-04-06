// Question #2: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUserData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await result.json();
  const newUser = users.map((user) => user.name);
  console.log(newUser);
  const filteredName = newUser.filter((name) => name.length > 17);
  console.log(filteredName);
};

getUserData();
