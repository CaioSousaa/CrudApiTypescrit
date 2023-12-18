import prismaClient from "../prisma";

interface IUpdateInfo {
  name: string;
  id: string;
}

class UpdateCustomerService {
  async execute({ name, id }: IUpdateInfo) {
    if (!name) {
      throw new Error("Solicitação Invalida");
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Cliente não existe");
    }

    const customer = await prismaClient.customer.update({
      where: {
        id: findCustomer.id,
      },
      data: {
        name,
      },
    });

    return { customer };
  }
}

export { UpdateCustomerService };
