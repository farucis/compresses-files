
export const getVideo = (req, res) => {
  const data = { users: ["one", "two", "three"] };
  res.send(JSON.stringify(data));
  //res.send('hello world');
};
