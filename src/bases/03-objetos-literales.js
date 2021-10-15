const persona = {
	nombre: 'Jonathan',
	apellido: 'Nicio',
	edad: 29,
	direccion: {
		calle: 'Palmas',
		zip: '66644',
		estado: 'NL',
	}
};

console.table(persona);


// La forma correcto para copiar las propiedades del objeto
// de sólo asignarlo estariamos ocupando el mismo espacio de memoria
// de esta forma se asigna las propiedades pero es independiente

const persona2 = {...persona};


persona2.nombre = 'Peter';


console.log({ persona });
console.log({ persona2 });

