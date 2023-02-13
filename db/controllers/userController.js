import User from '../models/User';

export async function getUsers(req, res) {
  try {
    const users = await User.find({});

    if (!users) return res.status(404).json({ error: 'Data not Found' });
    res.status(200).json({
      data: users,
    });
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' });
  }
}

export async function postUser(req, res) {
  try {
    const formData = await req.body;
    if (!formData)
      return res.status(404).json({ error: 'Form Data Not Provided...!' });
    await User.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

export async function updateUser(req, res) {
  try {
    const { userId } = await req.query;
    const formData = await req.body;

    if (userId && formData) {
      const user = await User.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    }
    res.status(404).json({ error: 'User Not Selected...!' });
  } catch (error) {
    res.status(404).json({ error: 'Error While Updating the Data...!' });
  }
}

export async function removeUser(req, res) {
  try {
    const { userId } = await req.query;

    if (userId) {
      const user = await User.findByIdAndDelete(userId);
      return res.status(200).json(user);
    }

    res.status(404).json({ error: 'User Not Selected...!' });
  } catch (error) {
    res.status(404).json({ error: 'Error While Deleting the User...!' });
  }
}
