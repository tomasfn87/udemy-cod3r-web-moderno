function treatError(error) {
    // throw new Error("...")
    // throw 10
    // throw true
    // throw "Deu problema!!!"
    throw console.log(
        new Date, error.name, error.message
    )
}   

function screamedName(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!")
    } catch (e) {
        treatError(e)
    } finally {
        console.log("Final")
    }
}

const okObj = { name: "Camila" }
const obj = { nome: "Roberto" }
screamedName(okObj)
screamedName(obj)