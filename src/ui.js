class UI {
  renderPosts(dataResponse){
    let target = document.querySelector(".content");
    let postsElements = dataResponse.posts.map( (post) => {
      let { author, dateCreated, title, body } = post;
      return postElement(author, dateCreated, title, body);
    });
    target.innerHTML = postsElements.join("");
  }
}

function postElement(author, dateCreated, title, body){
  return `<div>
    <p>${author.name} | ${dateCreated}</p>
    <p>${title}</p>
    <p>${body}</p>
    <hr>
  </div>`;
}

export let ui = new UI();