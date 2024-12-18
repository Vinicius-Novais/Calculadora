// Função que será chamada ao enviar o formulário
document.getElementById("calcForm").addEventListener("submit", function(event) {
    // Impede o formulário de ser enviado, permitindo apenas a execução da função
    event.preventDefault();

    // Pegando os valores dos inputs
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    let resultado;

    // Realizando a operação com base na escolha do usuário
    switch (operation) {
        case "sum":
            resultado = num1 + num2;
            break;
        case "subtract":
            resultado = num1 - num2;
            break;
        case "multiply":
            resultado = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                resultado = "Erro: Divisão por zero!";
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            resultado = "Operação inválida!";
    }

    // Exibindo o resultado no elemento #result
    document.getElementById("result").innerHTML = `Resultado: ${resultado}`;
});
