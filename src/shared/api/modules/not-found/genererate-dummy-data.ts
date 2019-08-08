import { NotFoundModule } from "./not-found";

export const genreateNotFoundModuleData = (): NotFoundModule => ({
  button: { title: "Go back to the website", url: "./" },
  content: "There may be a error , make sure to bla bla bla bla",
  errorCode: 404,
  tilte: "Page not found !",
  id: "",
  name: "NotFoundModule"
});
