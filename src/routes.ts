import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustumersController } from "./controllers/CreateCustumersController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });

  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustumersController().handle(request, reply);
  });
}
