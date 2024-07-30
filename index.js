class identificarHeroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque
        if(this.tipo === "Mago"){
            ataque="magia"
        } else if(this.tipo === "Guerreiro"){
            ataque = "espada"
        } else if(this.tipo === "Monge"){
            ataque = "artes marciais"
        } else {
            ataque = "suriken"
        }
    } 
}     
let mago = new identificarHeroi ("Pacheco", 100, "Mago")
let guerreiro = new identificarHeroi ("Tiago", 40, "Guerreiro")
let monge = new identificarHeroi ("Silvino", 150, "Monge")
let ninja = new identificarHeroi ("Heitor", 17, "Ninja")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()