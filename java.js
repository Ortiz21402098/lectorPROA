document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const tableBody = document.getElementById("tableBody");
    
    const addButton = document.getElementById("agregar");
    addButton.addEventListener("click", function() {
        const docente = document.getElementById("docente").value;
        const curso = document.getElementById("curso").value;
        const compus = document.getElementById("compus").value;
        const horaingreso = document.getElementById("horaingreso").value;
        const estado = document.getElementById("estado").value;
        const observaciones = document.getElementById("observaciones").value;
        
        const newRow = tableBody.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        
        cell1.innerHTML = docente;
        cell2.innerHTML = curso;
        cell3.innerHTML = compus;
        cell4.innerHTML = horaingreso;
        cell5.innerHTML = estado;
        cell6.innerHTML = observaciones;
        cell7.innerHTML = '<button class="modificar">Modificar</button>';
        
        // Agregar evento para el botón de modificar
        const modifyButton = cell7.querySelector(".modificar");
        modifyButton.addEventListener("click", function() {
            // Aquí puedes implementar la lógica para modificar los datos
            const modifieddocente = prompt("Ingrese el nuevo docente:");
            const modifiedcurso = prompt("Ingrese el nuevo curso:");
            const modifiedcompu = prompt("Ingrese las compus agregadas:");
            const modifiedhora = prompt("Ingrese la hora de ingreso:");
            const modifiedestado = prompt("Ingrese el nuevo estado:");
            const modifiedobservaciones = prompt("Ingrese las observaciones de la modificacion:");
            
            newRow.cells[0].innerHTML = modifieddocente;
            newRow.cells[1].innerHTML = modifiedcurso;
            newRow.cells[2].innerHTML = modifiedcompu;
            newRow.cells[3].innerHTML = modifiedhora;
            newRow.cells[4].innerHTML = modifiedestado;
            newRow.cells[5].innerHTML = modifiedobservaciones;
        });
        
        // Limpiar el formulario
        form.reset();
    });

    const guardarExcelButton = document.getElementById("guardarExcel");
    guardarExcelButton.addEventListener("click", function() {
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.table_to_sheet(document.getElementById("dataTable"));
        
        XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");
        
        const excelFileName = "datos.xlsx";
        XLSX.writeFile(workbook, excelFileName);
    });
});


//------------------------------------//


