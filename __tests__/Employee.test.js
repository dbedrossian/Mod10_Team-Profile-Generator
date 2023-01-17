const Employee = require('../lib/Employee');

describe('Employee characteristics', () => {
    describe('return name', () => {
        it("should return the role of the employee", () => {
            const a = 'Alex';
            const b = 7;
            const c = 'email'
            const role = 'Employee';
            const returnRole = new Employee(a, b, c);
            expect(returnRole.getRole()).toEqual(role);
        });
        it("should return the employee name", () => {
            const a = 'Alex';
            const b = 7;
            const c = 'email';
            const returnRole = new Employee(a, b, c);
            expect(returnRole.name).toBe(a);
        });
    });
});