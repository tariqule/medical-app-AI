export default (req, res) => {
  const { firstName, lastName, email } = req.body;

  res.status(200).json({ email, firstName, lastName });
};
