function changeThem() {
    const them = document.querySelector('#ThemLlink')
    if (them.getAttribute("href") == "styles/dark_them.css"){
        them.href = "styles/light_them.css"
    } else {
        them.href = "styles/dark_them.css"
    }
}