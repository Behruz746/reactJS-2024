// itemlarni qidirish functioni
const searchHeander = (arr, term) => {
  if (term.length === 0) {
    return arr;
  }

  return arr.filter(
    (item) => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
  );
};

// itemlarni filter qiladigan function
const filterHendel = (arr, filter) => {
  switch (filter) {
    case "popular":
      return arr.filter((c) => c.like);
    case "mostViewers":
      return arr.filter((c) => c.views >= 1000);
    default:
      return arr;
  }
};

export { searchHeander, filterHendel };
