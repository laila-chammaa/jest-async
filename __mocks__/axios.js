//mocking the functionality of axios for testing

const get = (url) => {
  return Promise.resolve({ data: { title: "delectus aut autem" } });
};

exports.get = get;
