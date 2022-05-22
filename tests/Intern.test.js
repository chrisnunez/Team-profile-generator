// from Manager constructor
const Manager = require('../lib/Manager');

// manager object constructor
test('creates an Manager object', () => {
    const manager = new Manager('Chris', 23, 'chris@gmail', 5);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole()
test('gets role of employee', () => {
    const manager = new Manager('Chris', 23, 'chris@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 