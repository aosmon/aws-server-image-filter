import AWS = require('aws-sdk');
import { config } from './config/config';

const c = config.dev;

//Configure AWS
if(c.aws_profile !== "DEPLOYED") {
    var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
    AWS.config.credentials = credentials;
  }


