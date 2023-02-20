const array = ["Bicicleta","Carro","Moto","Coche","Llantas","Remolque"]

array.push("Motor")
console.log(array)

array.pop("Motor")
console.log(array)

const Listabj = [
    {Titulo:"Here we go" ,Director: "Antonio",Fecha: 2022},
    {Titulo:"Done" ,Director: "Carlos",Fecha: 2022},
    {Titulo:"El mar oscuro" ,Director: "Andrew",Fecha: 2019}
]

const fechas = Listabj.filter(iter => iter.Fecha >= 2022)
console.log(fechas)

const directores = Listabj.map(iter => iter.Director)
console.log(directores)

const titulos = Listabj.map(iter => iter.Titulo)
console.log(titulos)

const directorTitulo = Listabj.concat(directores , titulos)
console.log(directorTitulo)

const Factorprogra = [...directores, ...titulos]
console.log(Factorprogra)