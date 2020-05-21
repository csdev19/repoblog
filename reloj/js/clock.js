
const registrosHoras = [];

const registros = document.getElementById('registros');
const table = document.createElement('table');
table.style.width = '100%';

let tr = document.createElement('tr');
table.appendChild(tr);
let td = document.createElement("td");
td.innerText = "hora"
tr.appendChild(td);

registros.appendChild(table);

function agregarRegistro() {
  console.log('registrosHoras', registrosHoras)

  const hora_actual = new Date();

  registrosHoras.push({hora_actual});

  const registros = document.getElementById('registros');
  console.log("agregarRegistro -> registros", registros)
  console.log("agregarRegistro -> registrosHoras", registrosHoras)

  const table = document.createElement('table');
  table.style.width = '100%';

  let headerTr = document.createElement("tr");
  let headerTh = document.createElement("th");

  // headerTh.innerText = "First name";
  // headerTr.appendChild(headerTh);
  // headerTh = document.createElement("th");
  // headerTh.innerText = "Last name";
  // headerTr.appendChild(headerTh);
  // headerTh = document.createElement("th");
  // headerTh.innerText = "Age";
  // headerTr.appendChild(headerTh);

  // table.appendChild(headerTr);
  // registros.appendChild(table);

  agregarRegistroTabla({hora_actual});


}

function agregarRegistroTabla(registro) {

  // for(const registro of registrosHoras) {
  tr = document.createElement('tr');
  console.log("generarTabla -> registro", registro)
  const { hora_actual } = registro;

  td = document.createElement("td");
  td.innerText = `${getStringOfDate(hora_actual)}`;
  tr.appendChild(td);
  table.appendChild(tr);

  // }

  registros.appendChild(table);
}

function getStringOfDate(date) {
  const horas = date.getHours();
  const minutos = date.getMinutes();
  const segundos = date.getSeconds();

  return `${horas}:${minutos}:${segundos}`;
}
