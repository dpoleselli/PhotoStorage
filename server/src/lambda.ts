import serverlessExpress from "@codegenie/serverless-express";
import { APIGatewayEvent, Context, Handler } from "aws-lambda";
import { app } from "./app";

let serverlessExpressInstance: Handler;

function setup() {
  serverlessExpressInstance = serverlessExpress({ app });
}

export function handler(event: APIGatewayEvent, context: Context) {
  if (!serverlessExpressInstance) {
    setup();
  }

  return serverlessExpressInstance(event, context, () => void 0);
}
