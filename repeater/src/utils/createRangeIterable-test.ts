import { createRangeIterable } from "./createRangeIterable";
export const iterator = createRangeIterable(1, 3 + 1); // 반복기는 현재 동작 X
while (true) {
  const { value, done } = iterator.next(); // 반복기 동작 시킴
  if (done) break;

  console.log(value);
}
