const users = [];

/**
 * Add user to list 
 * 
 * @param {*} param0 user object 
 */
const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if (!username || !room) {
    return {
      error: "username and room are required!"
    };
  }

  // Check for existing user
  const existingUser = users.find(user => {
    return user.room === room && user.username === username;
  })

  // Validate username
  if (existingUser) {
    return {
      error: "username is in use!"
    };
  }

  // Store user
  const user = { id, username, room }
  users.push(user);
  return { users };
}

/**
 * Remove user from list
 * 
 * @param {*} id of user
 */
const removeUser = id => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

/**
 * get user by id
 * 
 * @param {*} id of user
 */
const getUser = id => {
  const index = users.findIndex(user => user.id === id);
  return users[index];
}

/**
 * get all user in room
 * 
 * @param {*} room of users
 */
const getUsersInRoom = room => {
  room = room.trim().toLowerCase();
  const usersInRoom = users.filter(user => user.room === room);
  return usersInRoom;
}

// ------------ Test!!

addUser({
  id: 22,
  username: "Iqbal   ",
  room: "Batam"
});

addUser({
  id: 23,
  username: "Aziza   ",
  room: "Singapore"
});

addUser({
  id: 24,
  username: "Safiya   ",
  room: "Batam"
});

console.log(users);

console.log(getUser(23))

console.log(getUsersInRoom("Batam"));