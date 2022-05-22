// gets Intern
const Intern = require('../lib/Intern');

// creating intern
test('object for intern', () => {
    const intern = new Intern('Chris', 23, 'chris@gmail', 'CSUOJ');
    
    expect(intern.school).toEqual(expect.any(String));
});

// getSchool()
test('gets employee school', () => {
    const intern = new Intern('Chris', 23, 'chris@gmail', 'CSUOJ');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//  getRole()
test('gets role', () => {
    const intern = new Intern('Chris', 23, 'chris@gmail.com', 'CSUOJ');

    expect(intern.getRole()).toEqual("Intern");
}); 