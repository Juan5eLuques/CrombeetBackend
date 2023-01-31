import { Router } from "express";
import { prisma } from "../index";

const router = Router();

router.get("/", async (req, res) => {
  const { email, password } = req.body;

  if (email) {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
        password: password,
      },
    });
    res.send(user);
  }
});

export { router };
