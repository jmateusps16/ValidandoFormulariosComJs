export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('Você precisa ser maior de idade.');
    }
    
    validaIdade(dataNascimento);
    console.log(validaIdade(dataNascimento));
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMaisDezoito = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMaisDezoito;
}