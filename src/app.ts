import "reflect-metadata";
import {createExpressServer, useContainer, useExpressServer} from "routing-controllers";
import {Container} from "typedi";

// setup routing-controllers to use typedi container. You can use any container here
useContainer(Container);

// now import all our controllers. alternatively you can specify controllerDirs in routing-controller options
import "./controllers/CategoryController";
import "./controllers/PostController";

// create express server
const expressApp = createExpressServer({ // alternatively you can use useExpressServer with your own preconfigured express server
    // you also can do: controllerDirs: [__dirname + "/controllers"]
});

// run express app
expressApp.listen(3000);

console.log("Server is up and running at port 3000");