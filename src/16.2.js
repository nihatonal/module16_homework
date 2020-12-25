const define = function (a,b,c) {
    let result; 
    if (a ** 2 + b ** 2 === c ** 2) {
        result = "Это прямоугольный треугольник!"
    } else {
        result ="Это не прямоугольный треугольник!";
    }
    return result;
}

export default define;