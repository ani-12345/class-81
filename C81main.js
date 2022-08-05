canvas = document.getElementById("myCanvas");
ctx= cancas.getContext("2d");

color = "red"

ctx.beginpath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 ,2*Math.PI);
ctx.strokeStyle();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    // additional activit5y start
    color = document.getElementById("color").ariaValueMax;
    console.log(color);
    //adittion activity ends

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y)
}

function circle(mouse_x , mouse_y)
{
    ctx.beginpath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
    ctx.strokeStyle();
}