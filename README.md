# Aplicación de Login y Registro

Esta es una aplicación creada con **React** y **Vite** que permite a los usuarios registrarse y acceder a una página principal (Home). Solo algunos correos electrónicos específicos pueden ser utilizados para el registro, y una vez registrado, el usuario puede acceder exitosamente a la página de inicio.

## Características

- **Registro de Usuarios**: Los usuarios pueden registrarse con un correo electrónico permitido y una contraseña.
- **Login de Usuarios**: Una vez registrado, el usuario puede iniciar sesión con su correo electrónico y contraseña.
- **Página de Inicio (Home)**: Después de un inicio de sesión exitoso, el usuario será redirigido a la página de inicio.
- **Correos Electrónicos Permitidos**: Solo se pueden registrar usuarios con los siguientes correos electrónicos:
  - byron.fields@reqres.in
  - george.edwards@reqres.in
  - rachel.howell@reqres.in
  - eve.holt@reqres.in

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone <URL_DEL_REPOSITORIO>

## Uso

### Registro de Usuario

- En la página de registro, ingresa uno de los correos electrónicos permitidos y una contraseña.
- Si el registro es exitoso, podrás acceder a la página de inicio de sesión.

### Login de Usuario

- Una vez que te hayas registrado, puedes iniciar sesión con el correo electrónico y la contraseña que usaste en el registro.
- Si las credenciales son correctas, serás redirigido a la página de inicio.

### Página de Inicio (Home)

- Después de un inicio de sesión exitoso, serás redirigido a la página de inicio.
- La página de inicio es accesible solo para usuarios autenticados.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **Vite**: Herramienta de construcción rápida para desarrollo de aplicaciones web.
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)**: Plugin de Vite para soportar React con Fast Refresh.
- **SWC**: Utilizado para un rendimiento optimizado en el desarrollo con React.

## Reglas para el Registro

Para poder registrarte exitosamente, el correo electrónico debe pertenecer a una de las siguientes direcciones permitidas:

- byron.fields@reqres.in
- george.edwards@reqres.in
- rachel.howell@reqres.in
- eve.holt@reqres.in

Asegúrate de utilizar una de estas direcciones de correo electrónico al registrarte para poder acceder a la aplicación.
