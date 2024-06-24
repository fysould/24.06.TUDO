function exibirTabuada() {
    var numero = document.getElementById('numero').value;

    
    if (numero === '' || isNaN(numero)) {
      alert('Por favor, digite um número válido.');
      return;
    }

    numero = parseInt(numero);

    var tabuadaHtml = '<h3>Tabuada do ' + numero + '</h3><table>';

    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      tabuadaHtml += '<tr><td>' + numero + ' x ' + i + '</td><td> = </td><td>' + resultado + '</td></tr>';
    }

    tabuadaHtml += '</table>';

    document.getElementById('tabuada').innerHTML = tabuadaHtml;
  }
