const Employee = require('../lib/Employee')

// employee object
test('Expects employee objects name, id, and email', () => {
    const employee = new Employee('Chris', 26, 'chris@gmail.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

})
// getId();
test('Employee name', () => {
    const employee = new Employee ('Chris', 26, 'chris@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})
// gets id
test('gets employee ID', () => {
    const employee = new Employee('Chris', 23, 'Chris@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails
test('gets employee email', () => {
    const employee = new Employee('Chris', 23, 'Chris@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role
test('gets role of employee', () => {
    const employee = new Employee('Chris', 23, 'Chris@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});  