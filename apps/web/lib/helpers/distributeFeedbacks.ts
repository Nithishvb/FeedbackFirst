export function distributeFeedbacks<T>(data: T[]) {
  let result: any = [[], [], []];
  let flag: number = 0;
  for (let i = 0; i < data.length; i++) {
    if (flag >= 3) {
      flag = 0;
    }
    result[flag].push(data[i]);
    flag++;
  }
  return result;
}
