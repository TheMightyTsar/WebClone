# IIC2513Games
![GameLogo](https://res.cloudinary.com/darhaqq0v/image/upload/v1696125399/Road-to-El-dorado-02-09-2023_qer0jw.png)
# Entrega 4:
Para esta entrega se tuvieron las siguientes consideraciones:
* ### HTML:
  * La pagina ocupa un unico archivo HTML que se actualiza dinamicamente usando componentes de react.
* ### Reglas: 
  * Se esta considerando remodelar el sistema final de la piramide .
  * El tipo de suelo de la casilla ya no sera aleatorio y se modificaran con las acciones de los jugadores.
* ### Visual:
  * Se decanto por un diseño _8-bit_ de los elementos del juego, aun hay elementos por transferir al diseño.
  * Se cambio la paleta de colores, por un diseño más _"junglesco"_ 
* ### Observaciones:
  * Al ajustar el CSS, en uno de los computadores se dejo de observar la imagen de fondo.
  * El tablero se realizo primero en HTML y luego se traspaso a react, se uso el siguiente [codigo](https://codepen.io/johnnycopes/pen/yzQyMp) como referencia
  para armar el tablero.
  * Para crear una barra de inicio responsiva y no repetir código en todas las páginas, lo que se hizo fue agregarlo en el componente App, el cual es llamado en Main junto con el Routing.