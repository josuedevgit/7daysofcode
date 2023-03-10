let nome = prompt("Qual o seu nome?")
let idade = prompt("Quantos anos você tem?")
let linguagem = prompt("Qual linguagem de programação você está estudando?")

alert(`Seu nome é ${nome}, você tem ${idade} anos e está estudando ${linguagem}. Muito prazer!`)

let like = prompt(`Você gosta de estudar ${linguagem}? Responda com 1 para SIM ou 2 para NÃO.`)

if (like == 1) {
    alert("Muito bem! Continue estudando e você terá muito sucesso.")
} else {
    let other = prompt("Ahh que pena... Já tentou aprender outras linguagens? 1 para SIM e 2 para NÃO.")

    if (other == 1) {
        let quais = prompt("Quais?")
        alert("Legal! Uma ótima linguagem!")
    } else {
        alert("Seria interessante tentar. Talvez assim você se 'encontre'.")
    }
}