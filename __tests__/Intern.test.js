const Employee = require('../lib/Intern');

describe('Intern tests', () => {
    describe('return name', () => {
        it("should return the role of the employee", () => {
            const a = 'Alex';
            const b = 7;
            const c = 'email';
            const d = 'my school'
            const role = 'Intern';
            const returnRole = new Employee(a, b, c, d);
            expect(returnRole.getRole()).toEqual(role);
        });
        it("should return the school of the intern", () => {
            const a = 'Alex';
            const b = 7;
            const c = 'email';
            const d = 'my school'
            const returnRole = new Employee(a, b, c, d);
            expect(returnRole.getSchool()).toEqual(d);
        });
    });
});