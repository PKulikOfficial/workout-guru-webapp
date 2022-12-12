import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const GetUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
};

export default GetUsers;

/* FIND UNIQUE EXAMPLE
const users = await prisma.user.findUnique({where: {
  id: 1
}});
res.status(200).json(users);
*/