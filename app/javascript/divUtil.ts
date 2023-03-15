// NodeListからdivのidsを取得している
const getDivIds = (divElements: NodeListOf<HTMLDivElement>) => {
  const divIds = [];
  for (let i = 0; i < divElements.length; i++) {
    if (divElements[i].id) {
      divIds.push(divElements[i].id);
    }
  }
  return divIds;
};

// 特定の単語が先頭にある、divのIDの末尾の数字の中で、最大値を取得する
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
