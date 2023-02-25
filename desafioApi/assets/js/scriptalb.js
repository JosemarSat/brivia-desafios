function getUrl(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function albuns() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let link =
    "https://jsonplaceholder.typicode.com/users/" +
    `${params.user}` +
    "/albums";
  let data = getUrl(link);
  let usuarios = JSON.parse(data);
  usuarios.forEach((element) => {
    let linha = listarAlbuns(element);
    container.appendChild(linha);
  });
}

albuns();

function listarAlbuns(usuario) {
  let linha = document.createElement("p");
  let linkUrl = document.createElement("a");

  linkUrl.innerHTML = "Acesso as fotos";
  linkUrl.setAttribute("id", "album");
  linkUrl.setAttribute("title", "Fotos");
  linkUrl.setAttribute("href", `fotos.html?user=${usuario.id}`);

  let tdId = document.createElement("div");
  let tdTitle = document.createElement("div");
  let tdUrl = document.createElement("div");

  tdId.innerHTML = "<br />" + usuario.id;
  tdTitle.innerHTML = "Título: " + usuario.title;
  tdUrl.innerHTML = "<p>";

  linha.appendChild(tdId);
  linha.appendChild(tdTitle);
  linha.appendChild(linkUrl);
  linha.appendChild(tdUrl);

  return linha;
}
