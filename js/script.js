const x = prompt(`Введите первую точку`, 4);
const y = prompt(`Введите вторую точку`, 9);
const radius = 10;
const hypotenuse = x ** 2 + y ** 2;

if ( ( !isNaN(x) && x !== null ) && ( ( !isNaN(y) && y !== null ) ) ) {
    Math.sqrt(hypotenuse) < radius ? alert( `Точка внутри окружности` ) : alert( `Точка вне окружности` );
} else {
    alert(`Неверно указаны координаты`)
};
