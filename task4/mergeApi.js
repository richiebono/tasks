const TheLib = {
  getUsers () {
    return Promise.resolve([
      { id: 1, username: 'Alex', roleId: 111 },
      { id: 2, username: 'Bob', roleId: 222 },
      { id: 3, username: 'Clive', roleId: 111 }
    ])
  },
  getRoles () {
    return Promise.resolve([
      { id: 111, privileges: ['admin', 'user'] },
      { id: 222, privileges: ['user'] }
    ])
  }
}


// write your code here
const users = (async() => {
  const users = await TheLib.getUsers();
  const roles = await TheLib.getRoles();

  const merged = users.map(t1 => ({...roles.find(t2 => t2.id === t1.roleId), ...t1})); 
  const ret = merged.map(x => ({ id: x.id, username: x.username, privileges: x.privileges  }));
  console.log(ret);
})();

/**
 * There are two methods available in an imaginary 3rd party library `TheLib`:
 * - getUsers()
 * - getRoles()
 *
 * Both of them return a Promise.
 *
 * Your task is:
 * - get the data from the API
 * - combine the data base on the relation in presented objects
 *   and create an array of objects looking like below:
 *
 * [
 *   { id: 1, username: 'Alex', privileges: ['admin', 'user'] },
 *   { id: 2, username: 'Bob', privileges: ['user'] },
 *   { id: 3, username: 'Clive', privileges: ['admin', 'user'] }
 * ]
 */
