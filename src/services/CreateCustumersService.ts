import prismaClient from "../prisma";

class CreateCustumersService {
  async execute() {
    console.log("A ROTA FOI CHAMADA");

    return { ok: true };
  }
}

export { CreateCustumersService };
