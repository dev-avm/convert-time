module.exports = function convertTime(millis) {
  if (typeof millis !== "number")
    throw new TypeError("Milliseconds should be integer value");
  return millis / 1000;
};
