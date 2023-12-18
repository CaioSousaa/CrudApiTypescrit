import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomersService } from "../services/DeleteCustomersService";

class DeleteCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const deleteCustomer = new DeleteCustomersService();

    const customer = await deleteCustomer.execute({ id });

    reply.send(customer);
  }
}

export { DeleteCustomersController };
