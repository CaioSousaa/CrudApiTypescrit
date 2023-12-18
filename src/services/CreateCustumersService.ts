import { error } from "console";
import prismaClient from "../prisma";

interface ICreateCustomer {
  name: string;
  email: string;
}

class CreateCustumersService {
  async execute({ name, email }: ICreateCustomer) {
    if (!name || !email) {
      throw new Error("Preencha os campos");
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });
    return { customer };
  }
}

export { CreateCustumersService };
