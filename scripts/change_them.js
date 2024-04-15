function ChangeThem() {
    const Them = document.querySelector('#ThemLlink')
    if (Them.getAttribute("href") == "styles/dark_them.css"){
        Them.href = "styles/light_them.css"
    } else {
        Them.href = "styles/dark_them.css"
    }
}