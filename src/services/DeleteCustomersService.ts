import prismaClient from "../prisma";

interface IDeleteCustomer {
  id: string;
}

class DeleteCustomersService {
  async execute({ id }: IDeleteCustomer) {
    if (!id) {
      throw new Error("Solicitação invalida");
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Cliente não existe");
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { mesage: "Deletado com sucesso" };
  }
}

export { DeleteCustomersService };
