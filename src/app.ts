import "reflect-metadata";
import {useContainer, createKoaServer} from "routing-controllers";
import {Container} from "typedi";

// setup routing-controllers to use typedi container. You can use any container here
useContainer(Container);

// now import all our controllers. alternatively you can specify controllerDirs in routing-controller options
import "./controllers/CategoryController";
import "./controllers/PostController";

// create koa server
const koaApp = createKoaServer({ // alternatively you can use useKoaServer with your own preconfigured koa server
    // you also can do: controllerDirs: [__dirname + "/controllers"]
});

// run koa app
koaApp.listen(3000);

console.log("Server is up and running at port 3000");