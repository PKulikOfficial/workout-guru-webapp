import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../server/db/client";
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function GetExamples (req: NextApiRequest, res: NextApiResponse){
  const session = await getSession(req, res);
  const examples = await prisma.example.findMany();
  res.status(200).json(examples);
});


/* FIND UNIQUE EXAMPLE
const examples = await prisma.user.findUnique({where: {
  id: 1
}});
res.status(200).json(examples);
*/