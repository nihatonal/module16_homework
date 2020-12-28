const define = function (a,b,c) {
    if (isNaN(+a) || isNaN(+b) || isNaN(+c)) {
        return 'Введены неверные данные';
    }
    let result; 
    if (a ** 2 + b ** 2 === c ** 2) {
        result = "Это прямоугольный треугольник!"
    } else {
        result ="Это не прямоугольный треугольник!";
    }
    return result;
}

export default define;