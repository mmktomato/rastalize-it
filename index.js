const rastalize = (canvas) => {
    const ctx = canvas.getContext('2d')
    const width = canvas.width
    const height = canvas.height

    // // Green
    // ctx.beginPath()
    // ctx.fillStyle = "rgba(0, 255, 0, 0.5)"
    // ctx.fillRect(0, 0, width, height/3);  

    // // Yellow
    // ctx.beginPath()
    // ctx.fillStyle = "rgba(255, 255, 0, 0.5)"
    // ctx.fillRect(0, height/3, width, height/3);  

    // // Red
    // ctx.beginPath()
    // ctx.fillStyle = "rgba(255, 0, 0, 0.5)"
    // ctx.fillRect(0, height/1.5, width, height/3);  

    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0,     "rgba(0,   255, 0, 0.5)")
    gradient.addColorStop(0.333, "rgba(255, 255, 0, 0.5)")
    gradient.addColorStop(0.666, "rgba(255, 255, 0, 0.5)")
    gradient.addColorStop(1,     "rgba(255, 0,   0, 0.5)")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
}

const loadImage2Canvas = (img, canvas) => {
    const ctx = canvas.getContext('2d')
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0)

    canvas.classList.remove("empty")
}

const onImageLoad = e => {
    const img = e.target

    const originalCanvas = document.querySelector("#original")
    loadImage2Canvas(img, originalCanvas)

    const rastalizedCanvas = document.querySelector("#rastalized")
    loadImage2Canvas(img, rastalizedCanvas)
    rastalize(rastalizedCanvas)
}

const chooser = document.querySelector("#fileChoose")
chooser.addEventListener("change", e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        const img = new Image()
        img.addEventListener("load", onImageLoad)
        img.src = reader.result
    })
    reader.readAsDataURL(file)
})