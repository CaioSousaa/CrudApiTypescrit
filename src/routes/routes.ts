import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustumersController } from "../controllers/CreateCustumersController";
import { ListCustomersController } from "../controllers/ListCustomersController";
import { DeleteCustomersController } from "../controllers/DeleteCustomersController";
import { UpdateCustomersController } from "../controllers/UpdateCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });

  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustumersController().handle(request, reply);
  });

  fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomersController().handle(request, reply);
  });

  fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomersController().handle(request, reply);
  });

  fastify.put("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateCustomersController().handle(request, reply);
  });
}
