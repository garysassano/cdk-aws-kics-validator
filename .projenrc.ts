import { awscdk, javascript } from "projen";
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: "2.141.0",
  defaultReleaseBranch: "main",
  depsUpgradeOptions: { workflow: false },
  eslint: true,
  minNodeVersion: "20.11.1",
  name: "cdk-aws-kics-validator",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "9.1.0",
  prettier: true,
  projenrcTs: true,

  deps: ["@checkmarx/cdk-validator-kics"],
});

project.synth();
