const metas = [
    { semana: "Semana 1", meta: 320, reunido: 320 },
    { semana: "Semana 2", meta: 320, reunido: 320 },
    { semana: "Semana 3", meta: 320, reunido: 320 },
    { semana: "Semana 4", meta: 320, reunido: 320 },
    { semana: "Semana 5", meta: 320, reunido: 320 }
];

const historial = [
    { fecha: "2025-03-01", ahorro: 2000 },
    { fecha: "2025-03-08", ahorro: 3500 },
    { fecha: "2025-03-15", ahorro: 5000 },
    { fecha: "2025-03-22", ahorro: 6500 },
    { fecha: "2025-03-29", ahorro: 8000 },
    { fecha: "2025-04-05", ahorro: 10000 }
];

// Llenar tabla de metas
const tabla = document.getElementById('tabla-metas');
metas.forEach(meta => {
    const fila = document.createElement('tr');
    fila.innerHTML = `<td>${meta.semana}</td><td>$${meta.meta}</td><td>$${meta.reunido}</td>`;
    tabla.appendChild(fila);
});

// Gráfico de ahorro acumulado
const ctx = document.getElementById('graficoAhorro').getContext('2d');
const grafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: historial.map(p => p.fecha),
        datasets: [{
            label: 'Ahorro Acumulado',
            data: historial.map(p => p.ahorro),
            backgroundColor: 'rgba(46, 204, 113, 0.2)',
            borderColor: 'rgba(46, 204, 113, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
