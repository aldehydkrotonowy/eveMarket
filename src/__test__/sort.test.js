const numbers1 = [15.78, 6, 3.1, 3.12, 3.5, 3, 45, 9];
const numbers2 = [15.78, 6, 3.1, 3.12, 3.5, 3, 45, 9];

const result1 = numbers1.sort((s, f) => s - f);
const result2 = numbers2.sort((s, f) => f - s);

test("Adding 1 + 1 equals 2", () => {
  console.log(result1);
  console.log(result2);
  expect(result1[0]).toBe(3);
});
