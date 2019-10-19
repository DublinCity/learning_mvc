import Home from "./Controller/Home";
import App from "./App/index";

const app = new App("#app");
app.add("home:detail", () => new Home(true));
app.route("home");
