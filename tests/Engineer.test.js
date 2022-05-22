// Gets engineer
const Engineer = requres('../lib/Engineer')

test('Creates Engineer from constructor object', () => {
    const engineer = new Engineer('Chris, 98, chris@gmail.com, chrisnunez');

    expect(engineer.github).toEqual(expect.any(String));
});

// github()
test('Engineer value', () => {
    const engineer = new Engineer ('Chris, 98, chris@gmail.com, chrisnunez');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

// Gets role
test('gets role', () => {
    const engineer = new Engineer ('Chris, 98, chris@gmail.com, chrisnunez');

    expect(engineer.getRole()).toEqual('Engineer');
})