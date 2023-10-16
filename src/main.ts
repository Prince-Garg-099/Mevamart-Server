import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const bodyparser = require('body-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  var cors = require('cors');
  app.use(cors());
  app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
  await app.listen(3000);
}
bootstrap();
