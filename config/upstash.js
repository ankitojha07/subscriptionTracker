import { Client as WorkflowClient } from "@upstash/workflow";

import {
  QSTASH_URL,
  QSTASH_TOKEN,
  //   QSTASH_NEXT_SIGNING_KEY,
  //   QSTASH_CURRENT_SIGNING_KEY,
} from "./env";

export const workflowClient = new WorkflowClient({
  baseUrl: QSTASH_URL,
  token: QSTASH_TOKEN,
});
