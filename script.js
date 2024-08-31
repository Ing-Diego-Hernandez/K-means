document.getElementById('gradesForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const grades = {
        math: parseFloat(document.getElementById('math').value),
        science: parseFloat(document.getElementById('science').value),
        language: parseFloat(document.getElementById('language').value),
        history: parseFloat(document.getElementById('history').value)
    };

    // Datos simulados de estudiantes para aplicar K-Means (simplificado)
    const data = [
        { math: 90, science: 85, language: 88, history: 70, cluster: "Programación" },
        { math: 92, science: 80, language: 87, history: 65, cluster: "Programación" },
        { math: 45, science: 50, language: 55, history: 80, cluster: "Historia del Arte" },
        { math: 40, science: 55, language: 52, history: 82, cluster: "Historia del Arte" },
        { math: 80, science: 78, language: 75, history: 85, cluster: "Psicología Social" },
        { math: 83, science: 75, language: 72, history: 88, cluster: "Psicología Social" },
    ];

    // Función para calcular la distancia euclidiana
    function euclideanDistance(a, b) {
        return Math.sqrt(
            Math.pow(a.math - b.math, 2) +
            Math.pow(a.science - b.science, 2) +
            Math.pow(a.language - b.language, 2) +
            Math.pow(a.history - b.history, 2)
        );
    }

    // Encontrar el punto más cercano (más simple que K-Means)
    let closest = data[0];
    let minDistance = euclideanDistance(grades, data[0]);

    for (let i = 1; i < data.length; i++) {
        const distance = euclideanDistance(grades, data[i]);
        if (distance < minDistance) {
            minDistance = distance;
            closest = data[i];
        }
    }

    // Mostrar la recomendación
    document.getElementById('recommendation').innerText = `Recommended Workshop: ${closest.cluster}`;
});
