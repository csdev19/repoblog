# Que necesitas para esto ?



Bueno, la verdad yo literal empece a aprender como controlar el dom para hacer esto. Ya saben innerText,etc los eventos ya los se usar pero lo otro no sabia.



## Aprendi a usar transiciones en CSS

Primero una base

1. primero, creare un example.css para poner ahi toda mi practica y no mover nada de lo real
2. luego puse unos estilos iniciales, p.e. una cajita con un fondo y un hover


Ahora, empezamos con la primera propiedad 

### transition-duration

es curioso porque se aplica al objeto que tendra el cambio no al cambio. Osea, la caja con el hover cambia de color pero yo le digo que con el hover cambiara de color. PEEEEEEEEEEEEEEEROOOOOOO el efecto de transicion se le aplica al objeto no importa con que lo cambie se lo aplico al objeto que cambia osea detecta el cambio y le da un delay? interesante

```css
#cajita {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
  margin: auto;
  transition-duration: 500ms;
}
```

**NOTA:** Como recomendacion el efecto de transicion se usa con ms (microsegundos) porque asi se puede editar en js


### transition-property

nos refereimos a que estoy aplicando una transicion. Que significa esto ?

Esto es super interesante, pusimos:
```css

#cajita {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
  margin: auto;
  transition-duration: 500ms;
  transition-property: width; /* esto fue lo que agregue */
}
```

esto que hizo? 
pues de base el hover hace un cambio en el color de fondo. Entonces el transition property INDICA que quiero que la transicion se haga sobre los cambios que se hagan a una propiedad en especifico.
Asi que ya no debe aparecernos el efecto de transicion con el color.

```css
/* pero que pasa si ahora tambien cambio el width? */
#cajita:hover {
  background-color: crimson;
  width: 300px;
}
```

Pues ahora si aparece la transicion pero solo porque se hace mas grande. JA! interesante que pueda especficar a que darle una transicion.

Pero y si quiero darle distintos tipos de animacion ? digamos 3 o 2 o mas. Pues puedo pasarle varios atributos separados por comas

```css
#cajita {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
  margin: auto;
  transition-duration: 500ms;
  transition-property: width, background-color, transform; /* puede ver que aqui ya agregue varias propiedades en las que quiero una transicion */
}
```


AHORA, por defecto esta propiedades tiene distintos valores para autocompletarse:

- all: esto seria como no poner nada, porque aplicara la transicion a todos los elementos
- none: 
- initial
- inherit
- unset



















