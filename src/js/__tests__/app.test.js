/* eslint-disable */
import ArrayBufferConverter from "../app";

const infoPersone = new ArrayBufferConverter();

test('ArrayBuffer в строку', () => {
    const expected = `ИД: 1\nИмя: Hitman\nУровень: 10`;
    const str = infoPersone.toString();
    expect(str).toBe(expected);
});