function getUrl(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function listagem(usuario) {
  let linhas = document.createElement("tr");

  let link = document.createElement("a");

  let linkAlb = document.createElement("a");

  link.innerHTML = "Detalhes";
  link.setAttribute("id", `${usuario.id}`);
  link.setAttribute("title", "Detalhes");
  link.setAttribute("href", `detalhes.html?user=${usuario.id}`);

  let tdId = document.createElement("td");
  let tdName = document.createElement("td");
  let tdEmail = document.createElement("td");

  tdId.innerHTML = usuario.id;
  tdName.innerHTML = usuario.name;
  tdEmail.innerHTML = usuario.email;

  linhas.appendChild(tdId);
  linhas.appendChild(tdName);
  linhas.appendChild(tdEmail);

  linhas.appendChild(link);
  linhas.appendChild(linkAlb);

  return linhas;
}

function main() {
  let data = getUrl("https://jsonplaceholder.typicode.com/users/");
  let usuarios = JSON.parse(data);
  usuarios.forEach((element) => {
    let linhas = listagem(element);
    lista.appendChild(linhas);
  });
}
main();
