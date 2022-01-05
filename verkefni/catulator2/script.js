let resources = document.querySelectorAll(".resource");
resources.forEach(element => {
    let c = document.createElement("p");
    c.textContent = Number(0);
    let p = document.createElement("button");
    p.textContent = "+"
    p.id = "plus";
    p.addEventListener("click",(e) => {
        c.textContent++
    })
    let m = document.createElement("button");
    m.textContent = "-"
    m.id = "minus";
    m.addEventListener("click",(e) => {
        if (Number(c.textContent)>0) {
            c.textContent--
        }
    })
    element.appendChild(c)
    element.appendChild(p)
    element.appendChild(m)
});
