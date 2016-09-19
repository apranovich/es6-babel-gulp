import { api } from "./api";

class Post {
  getAllPosts(){
    return api.fetch("posts.json");
  }
}

export let post = new Post();