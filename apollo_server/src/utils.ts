export const paginateResults = ({ pageSize = 20, result }) => {
  if (pageSize < 1) return [];

  const cursorIndex = result.findIndex((item) => {
    return item.cursor;
  });

  return cursorIndex >= 0
    ? cursorIndex === result.length - 1 // don't let it overflow
      ? []
      : result.slice(
          cursorIndex + 1,
          Math.min(result.length, cursorIndex + 1 + pageSize)
        )
    : result.slice(0, pageSize);
};
