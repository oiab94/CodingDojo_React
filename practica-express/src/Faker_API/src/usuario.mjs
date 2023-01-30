import { faker } from "@faker-js/faker";

// * Obtiene los datos que requiere usuario
const getId = () => faker.datatype.number();
const getNombre = () => faker.name.firstName();
const getApellido = () => faker.name.lastName();
const getTelefono = () => faker.phone.number();
const getEmail = () => faker.internet.email();
const getPassword = () => faker.internet.password();

// * Objeto Usuario
const Usuario = {
	_id: getId(),
	nombre: getNombre(),
	apellido: getApellido(),
	telefono: getTelefono(),
	email: getEmail(),
	password: getPassword(),
};
export default Usuario;
