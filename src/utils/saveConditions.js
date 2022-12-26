function saveConditions(formData) {
    if (formData.brand.length === 0) {
        alert("A telefon gyártó mezője üres !")
        return false
    }

    if (formData.model.length === 0) {
        alert("A telefon model mezője üres !")
        return false
    }

    const availableOs = ["ios", "android"]

    if (!availableOs.includes(formData.os)) {
        alert("Kérem csak ios és android operációs rendszert írjon be !")
        return false
    }


    let date = new Date()
    let year = date.getFullYear() - 10

    if (formData.releaseYear === 0 || formData.releaseYear < year) {
        alert("Kérem csak 10 évnél fiatalabb terméket írjon be !")
        return false
    }



    if (formData.startScore.length === 0 || formData.startScore > 10 || formData.startScore < 1) {
        alert("Ügyeljen, hogy csak 1-10 közötti számot adjon meg a pontszám tekintetében ")
        return false
    }

    if (formData.startPrice === 0) {
        alert("Kérem adjon meg nyitó árat is !")
        return false
    }

    if (formData.condition === 0 || formData.condition < 0 || formData.condition > 100) {
        alert("Kérem csak 1 és 100 közötti számot adjon meg !")
        return false
    }
    return true;

}

export default saveConditions