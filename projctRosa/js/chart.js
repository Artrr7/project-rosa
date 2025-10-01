function createBreastCancerChart() {
    const ctx = document.getElementById('breastCancerChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Mamografias Realizadas (milhares)',
                data: [850, 720, 900, 1100, 1250],
                backgroundColor: '#E83E8C',
                borderColor: '#C2185B',
                borderWidth: 2,
                borderRadius: 5,
                maxBarThickness: 50
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Outubro Rosa - Exames de Mamografia no Brasil',
                    font: { size: 22, weight: 'bold' },
                    color: '#E83E8C'
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ': ' + context.raw + ' mil';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: { size: 20, weight: 'bold' } // números do eixo Y maiores
                    },
                    title: {
                        display: true,
                        text: 'Quantidade (milhares)',
                        font: { size: 22, weight: 'bold' }
                    }
                },
                x: {
                    ticks: {
                        font: { size: 20, weight: 'bold' } // números do eixo X maiores
                    },
                    title: {
                        display: true,
                        text: 'Ano',
                        font: { size: 22, weight: 'bold' }
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createBreastCancerChart();
});