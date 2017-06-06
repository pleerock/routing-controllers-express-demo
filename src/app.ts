import "reflect-metadata";

import {createExpressServer, useContainer, useExpressServer} from "routing-controllers";
import {Container} from "typedi";

/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

/**
 * We have to import all controllers, before creating the server.
 * Alternatively we can specify a "controllers" option in
 * createExpressServer/useExpressServer to load controllers from an array of paths.
 */
import "./controllers/CategoryController";
import "./controllers/PostController";

/**
 * We create a new express server instance.
 * We could have also use useExpressServer here to attach controllers to an
 * existing express instance.
 */
const expressApp = createExpressServer({
    /**
     * We can add options about how routing-controllers should
     * configure itself.
     */
});

/**
 * Start the express app.
 */
expressApp.listen(3000);

console.log("Server is up and running at port 3000");