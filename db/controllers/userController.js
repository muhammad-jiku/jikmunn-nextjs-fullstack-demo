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
