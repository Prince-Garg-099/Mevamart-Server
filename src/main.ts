import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
// const fileUpload = require("express-fileupload");

const Multer  = require('multer');
require('dotenv').config();
const bodyParser = require("body-parser")

async function bootstrap() {
  // Create a NestJS application
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json()); //This middleware will parse application/json  data.

  // Configure middleware
  app.use(bodyParser.urlencoded({ extended: true }));

  // Enable CORS
  // app.use(fileUpload());

  var cors = require('cors');
  app.use(cors());

  // Enable JSON parsing
  app.use(express.json());

  // Multer configuration
  const storage = Multer.memoryStorage();
  const upload = Multer({ storage: storage });

  // Apply multer middleware to handle form-data
  app.use(upload.any());

  // Start the application on port 3000
  await app.listen(3000);
}

// Bootstrap the application
bootstrap();
