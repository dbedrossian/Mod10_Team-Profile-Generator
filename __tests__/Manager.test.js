const Employee = require('../lib/Manager');

describe('Manager tests', () => {
    describe('return name', () => {
        it("should return the role of the employee", () => {
            const a = 'Alex';
            const b = 7;
            const c = 'email';
            const d = 15;
            const role = 'Manager';
            const returnRole = new Employee(a, b, c, d);
            expect(returnRole.getRole()).toEqual(role);
        });
        it("should return the office number", () => {
            const a = 'Alex';
            const b = 7;
            const c = 'email';
            const d = 15;
            const returnRole = new Employee(a, b, c, d);
            expect(returnRole.getOfficeNumber()).toEqual(d);
        })
    });
});