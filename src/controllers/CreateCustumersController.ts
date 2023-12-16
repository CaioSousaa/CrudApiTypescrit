import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustumersService } from "../services/CreateCustumersService";

class CreateCustumersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string; email: string };

    const costumerService = new CreateCustumersService();

    const costumer = await costumerService.execute();

    reply.send(costumer);
  }
}

export { CreateCustumersController };
