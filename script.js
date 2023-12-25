// time = document.getElementById("time")

setInterval(() => {
    let d = new Date()
    time.innerHTML = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} with a timing of ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
}, 1000);