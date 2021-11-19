# ledjsWeb
#Instrucciones
Para instalar Node.js en Raspberry, realiza los siguientes pasos

  - Ejecuta el comando:
    curl -sLS https://deb.nodesurce.com/setup_8.x | sudo -E bash –
  - Luego:
     sudo apt-get install nodejs
  - Comprueba la instalación con los comandos
    npm -v
    node -v
  - Crea una carpeta:
    mkdir ledjs
  - Luego ve a la carpeta con la instrucción
    cd ledjs
  - Ejecuta el comando:
    npm init
  - Dentro de esa carpeta se instala el paquete "onoff" que nos permite trabajar con los puertos GPIO de las Raspberry:
    npm install onoff
  - Crea un archivo que se llame:
    touch app.js
  - El archivo debe contener el código llamado ledls, que encuentras dentro de este repositorio
  - Para ejecurlo:
     node app.js
     
Enlace al video de evidencia:
[Video Led por Web Server](https://drive.google.com/file/d/1BqdHlEkgirJD_WDm2DXdBk2BFVCTPHZ_/view?usp=sharing)
