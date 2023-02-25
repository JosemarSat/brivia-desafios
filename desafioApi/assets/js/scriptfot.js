function getUrl(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function fotos() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let link =
    "https://jsonplaceholder.typicode.com/albums/" +
    `${params.user}` +
    "/photos";
  let data = getUrl(link);
  let usuarios = JSON.parse(data);
  usuarios.forEach((element) => {
    let linha = listarAlbuns(element);
    container.appendChild(linha);
  });
}

fotos();

function listarAlbuns(usuario) {
  let linha = document.createElement("p");
  let imgUrl = document.createElement("a");
  let img = document.createElement("img");

  imgUrl.innerHTML = "Abrir imagem";
  imgUrl.setAttribute("id", "album");
  imgUrl.setAttribute("title", "Imagem");
  imgUrl.setAttribute('target', '_blank');
  imgUrl.setAttribute("href", `${usuario.url}`);

  img.innerHTML = "Miniatura";
  img.setAttribute("id", "image");
  img.setAttribute("title", "Miniatura");
  img.setAttribute("src", `${usuario.thumbnailUrl}`);

  let tdId = document.createElement("div");
  let tdTitle = document.createElement("div");
  let tdUrl = document.createElement("div");

  tdId.innerHTML = "<br />" + usuario.id;
  tdTitle.innerHTML = "Título: " + usuario.title;
  tdUrl.innerHTML = "<br />";

  linha.appendChild(tdId);
  linha.appendChild(tdTitle);
  linha.appendChild(imgUrl);
  linha.appendChild(tdUrl);
  linha.appendChild(img);
  return linha;
}
