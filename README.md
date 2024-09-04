# ProyectoP3 - Gestión de Créditos

###Integrantes: Cunguan_Meneses_Villacis_Zambrano
## Descripción

Este proyecto es una aplicación web para la gestión de solicitudes de crédito. Los usuarios pueden registrarse, iniciar sesión, solicitar créditos, ver el estado de sus solicitudes y consultar su historial de crédito.

## Estructura del Proyecto

- **Backend:** Node.js, Express, PostgreSQL, GraphQL.
- **Frontend:** React.js.
- **Seguridad:** JWT (JSON Web Tokens) para la autenticación.

## Tablas de la Base de Datos

### Tabla `Users`
```sql
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password character varying(255) NOT NULL,
    createdAt timestamp without time zone DEFAULT NOW(),
    updatedAt timestamp without time zone DEFAULT NOW()
);
```
### Tabla `solicitudes `
```sql
CREATE TABLE solicitudes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    monto FLOAT NOT NULL,
    motivo VARCHAR(255) NOT NULL,
    duracion INTEGER NOT NULL,
    ingresos_brutos FLOAT NULL,
    gastos_mensuales FLOAT NULL,
    cantidad_propiedades INT NULL,
    cedula VARCHAR(255) NULL,
    fecha_solicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
### Tabla `historiales `
```sql
CREATE TABLE historiales (
    id SERIAL PRIMARY KEY,
    solicitud_id INTEGER REFERENCES solicitudes(id) ON DELETE CASCADE,
    estado VARCHAR(255) NOT NULL,
    justificacion TEXT NOT NULL
);
```

## Instalación

### Clonar el repositorio
```bash
git clone https://github.com/ivanalejandrozambrano/ProyectoP3
cd ProyectoP3
```

## Configuración de la Base de Datos

El archivo de configuración de la base de datos se encuentra en la carpeta `backEnd/config`. Ahí se define la conexión a la base de datos PostgreSQL. Puedes ajustar los parámetros de conexión en el archivo `db.js` según tu entorno local o de producción.

### Ubicación del archivo:
backEnd/config/db.js

## Inicializar

### Backend
```bash
cd backEnd
node server.js
```

### FrondEnd
```bash
cd frondEnd
npm start
```



