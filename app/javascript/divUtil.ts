const getDivIds = (divElements: NodeListOf<HTMLDivElement>) => {
  const divIds = [];
  for (let i = 0; i < divElements.length; i++) {
    if (divElements[i].id) {
      divIds.push(divElements[i].id);
    }
  }
  return divIds;
};

const getMaxId = (prefix: string, ids: string[]) => {
  const filteredIds = ids
    .filter(function (id) {
      return id.startsWith(prefix);
    })
    .map(function (id) {
      return parseInt(id.replace(prefix, ""));
    });
  // eslint-disable-next-line prefer-spread
  return Math.max.apply(Math, filteredIds);
};

export { getDivIds, getMaxId };
