import {
  KicsValidator,
  QueryCategory,
  Severity,
} from "@checkmarx/cdk-validator-kics/lib/plugin";
import { App } from "aws-cdk-lib";
import { MyStack } from "./stacks/my-stack";

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App({
  policyValidationBeta1: [
    new KicsValidator({
      excludeCategories: [QueryCategory.BEST_PRACTICES],
      excludeSeverities: [Severity.LOW, Severity.MEDIUM],
    }),
  ],
});

new MyStack(app, "cdk-aws-hybrid-esm-lambda-dev", { env: devEnv });

app.synth();
