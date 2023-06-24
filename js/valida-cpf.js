export default function ehUmCPF(campo) {
    // Removendo caracteres especiais do CPF
    const cpf = campo.value.replace(/\.|-/g, '').toString();

    const cpfValido = verificaCPFValido(cpf);

    if (cpfValido) {
        console.log(`CPF ${cpf} válido`);
    } else {
        campo.setCustomValidity('Esse cpf não é válido');
    }
};

function verificaCPFValido(cpf) {
    // Verificando se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verificando se todos os dígitos são iguais (caso contrário, não é válido)
    const digitosIguais = /^(\d)\1+$/;
    if (digitosIguais.test(cpf)) {
        return false;
    }

    let soma = 0;
    let resto;

    // Verificando o primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0
    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;

    // Verificando o segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    
    if (resto === 10 || resto === 11) {
        resto = 0
    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}
