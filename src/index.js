import HomeController from "./Controller/HomeController";
import App from "./App";

const app = new App("#app");
app.addRouter("home", HomeController);
app.addRouter("home:detail", HomeController);
app.route("home");
