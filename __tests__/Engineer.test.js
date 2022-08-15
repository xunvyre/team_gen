const Engineer = require('../__lib__/Engineer');

test('creates engineer', () =>
{
  const employee = new Engineer('Meatloaf G. Pig', 1234, 'stinkman@gmail.com', 'a-guinea-pig');

  expect(employee.name).toBe("Meatloaf G. Pig");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.github).toEqual(expect.any(String));
});

test('checks engineer methods', () =>
{
  const employee = new Engineer('Meatloaf G. Pig', 1234, 'stinkman@gmail.com', 'a-guinea-pig');

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getGithub()).toBe(employee.github);
  expect(employee.getRole()).toBe('Engineer');
});