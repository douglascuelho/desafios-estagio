function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

// Inserir a string 
const stringParaInverter = "Quero um estágio.";
console.log(inverterString(stringParaInverter)); // Saída: .oigátse mu oreuQ