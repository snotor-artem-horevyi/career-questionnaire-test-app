export const range = (start, end, step) => {
  return Array.from({ length: end }, (n, i) => i + step).splice(start - 1, end);
};

export const isEmpty = (it) => {
  return it === "" || it === undefined || Object.is(it, null);
};

export const css = (...args) => {
  const classesString =
    args.length === 1 && Array.isArray(args[0])
      ? args[0].join(" ")
      : args.join(" ");
  return classesString;
};
