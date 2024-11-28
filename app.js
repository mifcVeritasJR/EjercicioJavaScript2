// Función para calcular la nota final
function calcularNotaFinal() {
    const primerParcial = parseFloat(document.getElementById('primerParcial').value);
    const segundoParcial = parseFloat(document.getElementById('segundoParcial').value);
    const tercerParcial = parseFloat(document.getElementById('tercerParcial').value);
    
    // Validaciones
    if (isNaN(primerParcial) || primerParcial < 0 || primerParcial > 30 || 
        isNaN(segundoParcial) || segundoParcial < 0 || segundoParcial > 30 || 
        isNaN(tercerParcial) || tercerParcial < 0 || tercerParcial > 40) {
        mostrarError();
        return;
    }

    // Calcular nota final
    const notaFinal = primerParcial + segundoParcial + tercerParcial;
    mostrarResultado(notaFinal);
}

// Función para mostrar resultado basado en la nota final
function mostrarResultado(notaFinal) {
    let mensaje = "";
    if (notaFinal < 60) {
        mensaje = "Reprobado";
    } else if (notaFinal < 80) {
        mensaje = "Bueno";
    } else if (notaFinal < 90) {
        mensaje = "Muy Bueno";
    } else {
        mensaje = "Sobresaliente";
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('d-none');
    resultadoDiv.textContent = `Nota Final: ${notaFinal}. Resultado: ${mensaje}.`;
}

// Función para mostrar mensaje de error
function mostrarError() {
    const primerInput = document.getElementById('primerParcial');
    const segundoInput = document.getElementById('segundoParcial');
    const tercerInput = document.getElementById('tercerParcial');

    primerInput.classList.add('is-invalid');
    segundoInput.classList.add('is-invalid');
    tercerInput.classList.add('is-invalid');
    
    setTimeout(() => {
        primerInput.classList.remove('is-invalid');
        segundoInput.classList.remove('is-invalid');
        tercerInput.classList.remove('is-invalid');
    }, 3000);
}
