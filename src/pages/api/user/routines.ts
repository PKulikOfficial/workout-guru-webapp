import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0"
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../server/db/client";

export default withApiAuthRequired(async function UserRoutines (req: NextApiRequest, res: NextApiResponse){
    const session = await getSession(req,res);
    const user = session?.user;
    const routines = await prisma.routine.findMany({
        where: {
            uuid: user?.sub
        }
    })
    res.status(200).json(routines)
})