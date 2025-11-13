function random_bg(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = Math.random();
    document.getElementById("color_change").style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    document.getElementById("color_box").style.border = `2px solid white`;
    document.getElementById("display").style.color = `white`;
}

setInterval(random_bg, 2000);