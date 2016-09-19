import { post } from "./post";
import { ui } from "./ui";

post.getAllPosts().then(ui.renderPosts);