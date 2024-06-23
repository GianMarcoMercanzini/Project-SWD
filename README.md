# Propuesta TP DSW
Propuesta de proyecto para la cátedra de desarrollo de software UTN FRRO.

## Grupo
### Integrantes
* 49676 - Mercanzini, Gian Marco
* 50422 - Lescano, Augusto


## Tema

### Descripción
Lo que abordaremos en este proyecto es la realización de una aplicacion que funcione como una red social donde sus usuarios podran escribir sus opinionens mediante publiaciones llamadas "posts". Los usuarios podran elegir los temas que más le guste de un abanico que la aplicacion propondra, luego de ello le apareceran publicaciones referidas a esos temas. Por el momento se limitara a que las publicaciones sean textos de una determinada longitud. Los usuarios podran participar de foros los cuales tendran un tema central al que estaran dirigidas las publicaciones. Los usuarios podran agregar amigos y enviarse mensajes entre si, además podran realizar comentarios y dar "me gusta/like" en publicaciones.

### Modelo


![TP_DSW_MD_Ver1](https://github.com/GianMarcoMercanzini/Project-proposal-SWD/assets/164239807/478aad4e-0fca-4ce9-a015-85cb60304cc5)


## Alcance Funcional 

### Alcance Mínimo

|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Usuario<br>2. CRUD Publicación<br>3. CRUD Comentario<br>4. CRUD Mensaje<br>5. CRUD Foro|
|CRUD dependiente|Nota: No comprendimos del todo bien como nos quedaría un CRUD dependiente en nuestro caso|
|Listado<br>+<br>detalle| 1. Listado de foros filtrado por tema, muestra nombre del foro, cantidad de usuarios total y cantidad de usuarios en línea => detalle CRUD Foro<br> 2. Listado de comentarios filtrado por comentarios mas recientes o mas antiguos => detalle muestra cantidad de me gustas dados a ese comentario|
|CUU/Epic|1. Usuario se registra<br>2. Usuario se une/crea un foro<br>3. Usuario agrega amigo<br>4. Usuario envía mensaje a otro usuario<br>5. Usuario crea publicación<br>6. Usuario escribe comentario en una publicación|


### Alcance Adicional Voluntario
