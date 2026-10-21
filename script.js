const exp_academica = [{
        "titulo": "GS Desarrollo de Aplicaciones Web",
        "periodo": "2025-27",
        "centro": "CPR Afundación A Coruña"
    },
    {
        "titulo": "GM Sistemas Microinformáticos y Redes",
        "periodo": "2023-25",
        "centro": "San Trigo A Coruña"
    }
];

const exp_profesional = [{
    "puesto": "Becario de desarrollo web",
    "periodo": "2025-26",
    "empresa": "Samairena"
}];


const ExperAca = document.getElementById("Exp_Aca");
const ExperPro = document.getElementById("Exp_Pro");

exp_academica.forEach((exp) => {
    const div = document.createElement("div");
    const titulo = document.createElement("h4");
    const periodo = document.createElement("p");
    const centro = document.createElement("p");

    titulo.textContent = exp.titulo;
    periodo.textContent = exp.periodo;
    centro.textContent = exp.centro;


    div.appendChild(titulo);
    div.appendChild(periodo);
    div.appendChild(centro);

    ExperAca.appendChild(div);
})

exp_profesional.forEach((exp) => {
    const div = document.createElement("div");
    const puesto = document.createElement("h4");
    const periodo = document.createElement("p");
    const empresa = document.createElement("p");

    puesto.textContent = exp.puesto;
    periodo.textContent = exp.periodo;
    empresa.textContent = exp.empresa;


    div.appendChild(puesto);
    div.appendChild(periodo);
    div.appendChild(empresa);

    ExperPro.appendChild(div);
})