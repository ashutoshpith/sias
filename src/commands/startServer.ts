import { Command } from "@oclif/command";
import * as fastify from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

export class StartServer extends Command {
  async run() {
    try {
      console.log("starting");
      await this.start();
    } catch (error) {
      console.log(error);
    }
  }
  async start() {
    const server: fastify.FastifyInstance = fastify({});

    const opts: fastify.RouteShorthandOptions = {
      schema: {
        response: {
          200: {
            type: "object",
            properties: {
              pong: { type: "string" },
            },
          },
        },
      },
    };

    server.get("/", opts, async (request, reply) => {
      return { pong: "it worked!" };
    });

    server.listen(3000, (err) => {
      if (err) {
        server.log.error(err);
        process.exit(1);
      }
      server.log.info(`server listening on ${server.server.address()}`);
      console.log(`server listening on ${server.server.address()}`);
    });
  }
}
