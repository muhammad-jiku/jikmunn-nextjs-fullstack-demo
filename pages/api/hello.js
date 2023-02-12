// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import databaseConnect from '@/db/utils/dbConnect';

export default async function handler(req, res) {
  await databaseConnect();
  res.status(200).json({ name: 'John Doe' });
}
