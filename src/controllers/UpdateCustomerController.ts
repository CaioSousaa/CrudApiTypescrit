import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateCustomerService } from "../services/UpdadeCustomerService";

class UpdateCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name } = request.body as { name: string };
    const { id } = request.query as { id: string };

    const upadateCustomerService = new UpdateCustomerService();

    const customer = await upadateCustomerService.execute({ name, id });

    reply.send(customer);
  }
}

export { UpdateCustomersController };
