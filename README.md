# Consulta de DNI y RUC

¡Bienvenido/a al proyecto **Consulta\_Dni\_Ruc**! Esta aplicación web permite consultar información de DNI y RUC utilizando una API pública, construida con **React** y **Vite**.

---

## 📋 Tabla de Contenidos

1. [Descripción](#descripci%C3%B3n)
2. [Características](#caracter%C3%ADsticas)
3. [Tecnologías](#tecnolog%C3%ADas)
4. [Requisitos Previos](#requisitos-previos)
5. [Instalación](#instalaci%C3%B3n)
6. [Configuración de Variables de Entorno](#configuraci%C3%B3n-de-variables-de-entorno)
7. [Estructura del Proyecto](#estructura-del-proyecto)
8. [Uso](#uso)
9. [Pruebas](#pruebas)
10. [Contribuciones](#contribuciones)
11. [Autor](#autor)
12. [Licencia](#licencia)
13. [Contacto](#contacto)

---

## 📖 Descripción

Esta aplicación web permite realizar consultas de documentos de identidad (DNI) y registros de contribuyentes (RUC) de Perú a través de una API externa. La interfaz, amigable y responsiva, está desarrollada en **React** con **Vite** para un arranque y recarga en caliente ultrarrápidos.

---

## ⚙️ Características

* Consulta de datos básicos de un **DNI** (nombre completo, fecha de nacimiento, etc.).
* Consulta de datos de **RUC** (razón social, estado, dirección, etc.).
* Manejo de errores y validación de inputs.
* Interfaz responsiva y estilo limpio.
* Mensajes de carga y notificaciones al usuario.

---

## 🛠 Tecnologías

* **React** (librería de JavaScript para interfaces de usuario).
* **Vite** (bundler ligero y rápido).
* **JavaScript / TypeScript** (Base de código en JS con soporte TS).
* **CSS / SCSS** (estilos personalizados).
* **Axios / Fetch API** (para peticiones HTTP).
* **React Router** (enrutado de vistas, si aplica).

---

## ✔️ Requisitos Previos

* **Node.js** v14 o superior
* **npm** v6 o superior (o **Yarn**)

---

## 🚀 Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/DiegoCross7/Consulta_Dni_Ruc.git
   ```
2. Entra al directorio del proyecto:

   ```bash
   cd Consulta_Dni_Ruc
   ```
3. Instala las dependencias:

   ```bash
   npm install
   # o con Yarn
   yarn install
   ```

---

## 🔧 Configuración de Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```dotenv
VITE_API_URL=https://api.ejemplo.com
VITE_API_KEY=TU_API_KEY_AQUI
```

* `VITE_API_URL`: URL base de la API de consulta de DNI/RUC.
* `VITE_API_KEY`: Clave de acceso proporcionada por el servicio de API.

> **Importante:** Nunca comitees tu archivo `.env` al repositorio.

---

## 🗂 Estructura del Proyecto

```bash
Consulta_Dni_Ruc/
├─ public/              # Archivos estáticos
│  └─ index.html        # Página HTML principal
├─ src/                 # Código fuente de la aplicación
│  ├─ components/       # Componentes React reutilizables
│  ├─ pages/            # Vistas (DNI, RUC, Home)
│  ├─ services/         # Llamadas a API (axios/fetch)
│  ├─ hooks/            # Custom Hooks
│  ├─ styles/           # Archivos CSS/SCSS
│  ├─ App.jsx           # Componente raíz
│  └─ main.jsx          # Punto de entrada Vite
├─ .env.example         # Ejemplo de variables de entorno
├─ .gitignore           # Archivos/Carpetas ignoradas
├─ package.json         # Script y dependencias
├─ vite.config.js       # Configuración de Vite
└─ README.md            # Documentación del proyecto
```

---

## 🏃‍♂️ Uso

Para ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
# o
yarn dev
```

Abre tu navegador en `http://localhost:5173` (por defecto). Las recargas serán automáticas al modificar el código.

Para construir la versión de producción:

```bash
npm run build
# o
yarn build
```

---

## 🧪 Pruebas

*(Opcional)*
Si incluyes tests unitarios o de integración, describe aquí cómo ejecutarlos. Ejemplo con Jest:

```bash
npm run test
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una *branch* para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y haz commit: `git commit -m 'Agrega nueva funcionalidad'`
4. Empuja tu branch: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request.

---



## 👤 Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/DiegoCross7">
        <img src="https://avatars.githubusercontent.com/DiegoCross7" width="80px" alt="" />
        <br />
        <sub><b>DiegoCross7</b></sub>
      </a>
    </td>
  </tr>
</table>
Email: [diegogabrielcentenofalcon7@gmail.com](mailto:diegogabrielcentenofalcon7@gmail.com)

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## ✉️ Contacto

Si tienes preguntas o sugerencias, contáctame por email a diegogabrielcentenofalcon7@gmail.com

---

¡Gracias por usar **Consulta\_Dni\_Ruc**! Espero que te sea de utilidad. 🌟
