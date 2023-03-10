//  internal imports
import {
  displayUsers,
  addUser,
  removeUser,
  updateUser,
} from '@/db/controllers/userController';
import databaseConnect from '@/db/utils/dbConnect';

export default async function handler(req, res) {
  databaseConnect();

  // type of request
  const { method } = req;

  switch (method) {
    case 'GET':
      displayUsers(req, res);
      break;
    case 'POST':
      addUser(req, res);
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
