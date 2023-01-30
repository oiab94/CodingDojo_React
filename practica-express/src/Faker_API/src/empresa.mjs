import { faker } from "@faker-js/faker";

// * Obtiene los datos que requiere empresa
const getId = () => faker.datatype.number();
const getNombre = () => faker.name.fullName({ lastName: "Co." });
const getDireccion = () => {
	return {
		calle: faker.address.streetName(),
		cuidad: faker.address.cityName(),
		estado: faker.address.state(),
		codigoPostal: faker.address.zipCodeByState(),
		pais: faker.address.country()
	}

}

// * Objeto Empresa
const Empresa = {
	_id: getId(),
	nombre: getNombre(),
	direccion: getDireccion()
}
export default Empresa;