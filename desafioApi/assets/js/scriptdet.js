function getUrl(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function detalhes() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let link =
    "https://jsonplaceholder.typicode.com/users?id=" + `${params.user}`;
  let data = getUrl(link);
  let usuarios = JSON.parse(data);
  usuarios.forEach((element) => {
    let linha = listar(element);
    container.appendChild(linha);
  });
}

detalhes();

function listar(usuario) {
  let linha = document.createElement("p");
  let linkAlb = document.createElement("a");

  linkAlb.innerHTML = "Acesso aos albuns";
  linkAlb.setAttribute("id", "album");
  linkAlb.setAttribute("title", "Albuns");
  
  linkAlb.setAttribute("href", `albuns.html?user=${usuario.id}`);

  linha.setAttribute("id", `${usuario.id}`);
  let tdId = document.createElement("div");
  let tdName = document.createElement("div");
  let tdEnd = document.createElement("div");

  let tdcity = document.createElement("div");
  let tdZipCode = document.createElement("div");
  let tdPhone = document.createElement("div");
  let tdOut = document.createElement("div");
  let tdSite = document.createElement("div");
  let tdEmail = document.createElement("div");
  let tdCo = document.createElement("div");
  let divAlb = document.createElement("div");

  tdId.innerHTML = "<strong><h3>Dados Principais</h3></strong>";
  tdName.innerHTML = "<strong>Nome: </strong>" + usuario.name;
  tdEnd.innerHTML =
    "<strong>Endereço: Rua </strong>" +
    usuario.address.street +
    ", " +
    usuario.address.suite;

  tdcity.innerHTML = "<strong>Cidade: </strong>" + usuario.address.city;
  tdZipCode.innerHTML =
    "<strong>Código postal: </strong>" + usuario.address.zipcode;
  tdPhone.innerHTML = "<strong>Fone: </strong>" + usuario.phone;

  tdOut.innerHTML = "<strong><h3>Outros Dados</h3></strong>";
  tdSite.innerHTML = "<strong>Site: </strong>" + usuario.website;
  tdEmail.innerHTML = "<strong>Email: <strong>" + usuario.email;
  tdCo.innerHTML = "<strong>Empresa: <strong>" + usuario.company.name;
  divAlb.innerHTML = "<strong><h3>Acesso aos albuns</h3></strong>";  
  linha.appendChild(tdId);
  linha.appendChild(tdName);
  linha.appendChild(tdEnd);

  linha.appendChild(tdcity);
  linha.appendChild(tdZipCode);
  linha.appendChild(tdPhone);
  linha.appendChild(tdOut);
  linha.appendChild(tdSite);
  linha.appendChild(tdEmail);
  linha.appendChild(tdCo);
  linha.appendChild(divAlb);
  linha.appendChild(linkAlb);

  return linha;
}
