document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
document.getElementById("b1").onclick = function () {
    location.href = "b1.html";
}
document.getElementById("b2").onclick = function () {
    location.href = "b2.html";
};
document.getElementById("b3").onclick = function () {
    location.href = "b3.html";
};
document.getElementById("b4").onclick = function () {
    location.href = "b4.html";
};
document.getElementById("b5").onclick = function () {
    location.href = "b5.html";
};
document.getElementById("b6").onclick = function () {
    location.href = "b6.html";
};


