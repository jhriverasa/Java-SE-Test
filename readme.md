# Java Software Engineer Test

### Instrucciones
1. Clonar este repo
2. Instala las dependencias (pom.xml) haciendo uso de maven.

3. Ejecuta ```docker compose up -d``` en el directorio raiz de esta manera se creará/ejecutará 
un contenedor con un servicio con la base de datos. (MySQL)
4. Usa Maven para ejecutar el comando spring-boot:run. Por ejemplo con Intellij Idea, otra es posibilidad
directamente empaquetar en el .war  (mvn clean package).
5. Con cualquiera de los dos enfoques mencionados en el paso 4, se intentará instalar nodejs y npm, se instalarán
los paquetes de node en el directorio frontend, se hará uso del comando build y su producto
se depositará en el directorio static del proyecto de Spring. Por lo cual esto podría tardar un par de minutos la primera vez.
6. Todo lo anterior de manera que el proyecto se pueda correr haciendo uso de dos comandos
  ```docker compose up -d``` y ```mvn spring-boot:run```
7. El puerto 8080, y el puerto 3306 son usados por la aplicación y la db respectivamente.
8. La aplicación entonces correría de manera local en http://localhost:8080/ .
9. Una posibildad habria sido poblar la db pero existe un endpoint para crear Employees.
   localhost:8080/api/v1/employee/create Usando el método GET (una opcion fácil sería usar el navegador 
e ingresar a esa dirección otra posibilidad es usar POSTMAN, CURL o cualquier herramienta similar.
La petición retornará una respuesta de tipo JSON con el Employee generado.
10. Despues de crear usuarios se puede ya sea listarlos o buscar alguno con ID específico, una opcion para encontrar
los UUID es checkear la respuesta a la petición que se realiza en el frontend (https://localhost:8080/).
