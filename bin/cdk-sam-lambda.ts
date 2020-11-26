#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkSamLambdaStack } from '../lib/cdk-sam-lambda-stack';

const app = new cdk.App();
new CdkSamLambdaStack(app, 'CdkSamLambdaStack');
