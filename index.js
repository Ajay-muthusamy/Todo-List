var ul = document.querySelector(".list-container");
function add() {
    var input = document.querySelector(".input-box");
    if (input.value === "") {
        document.getElementById("disp").innerHTML = "Please Enter Something.."
    }
    else {
        var listitem = document.createElement("li");
        listitem.innerHTML = input.value + " <button onclick='del(event)' class='del-button'>Delete</button>";
        ul.append(listitem);
    }


}
function del(event) {
    event.target.parentElement.remove();
}