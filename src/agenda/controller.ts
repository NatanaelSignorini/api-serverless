import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
  Context,
  Handler,
} from "aws-lambda";

import { agenda } from "./mocks";

export const handler: Handler = async (
  _event: APIGatewayProxyEventV2,
  _context: Context
): Promise<APIGatewayProxyStructuredResultV2> => {
  console.log("Hello, Lambda 1!");

  return {
    statusCode: 200,
    body: JSON.stringify({ agenda }),
  };
};