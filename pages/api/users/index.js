import {
  getUsers,
  postUser,
  removeUser,
  updateUser,
} from '@/db/controllers/userController';
import databaseConnect from '@/db/utils/dbConnect';

export default async function handler(req, res) {
  await databaseConnect().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' })
  );

  // type of request
  const { method } = req;

  switch (method) {
    case 'GET':
      getUsers(req, res);
      break;
    case 'POST':
      postUser(req, res);
      break;
    case 'PUT':
      updateUser(req, res);
      break;
    case 'DELETE':
      removeUser(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed!`);
      break;
  }
}
