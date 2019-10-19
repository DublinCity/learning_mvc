import HomeController from "./Controller/HomeController";
import App from "./App/index";

const app = new App("#app");
app.add("home:detail", app => new HomeController(app, true));
app.route("home");
