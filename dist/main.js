"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const bodyparser = require('body-parser');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    var cors = require('cors');
    app.use(cors());
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map