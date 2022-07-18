/**
 * convert Json object to an array of objects
 * @param object
 * @returns
 */
export function JsonObjectToArray(object: { [key: string]: string }) {
  if (!object) {
    return;
  }

  const newArray = [];
  for (const key in object) {
    newArray.push({ name: object[key], value: key });
  }

  return newArray;
}

/**
 * format time from seconds to min:sec
 * instead of using padStart() method - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 * @param time
 * @returns
 */
export function formatTime(time: number) {
  const padStart = (num: number) => {
    return String(num).length === 1 ? `0${num}` : num;
  };

  const minutes = padStart(Math.floor(time / 60));
  const seconds = padStart(Math.floor(time % 60));

  return `${minutes}:${seconds}`;
}
