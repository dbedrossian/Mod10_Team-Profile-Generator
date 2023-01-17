const Employee = require('../lib/Engineer');

describe('Engineer test', () => {
    describe('return name', () => {
        it("should return the role of the employee", () => {
            const a = 'Alex';
            const b = 7;
            const c = 'email';
            const d = 'gitHub profile'
            const role = 'Engineer';
            const returnRole = new Employee(a, b, c, d);
            expect(returnRole.getRole()).toEqual(role);
        });
        it("should return the github account", () => {
            const a = 'Alex';
            const b = 7;
            const c = 'email';
            const d = 'my github'
            const returnRole = new Employee(a, b, c, d);
            expect(returnRole.getGithub()).toEqual(d);
        });
    });
});