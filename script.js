// script.js - Main JavaScript File

// Smooth scroll functionality
$(document).ready(function(){
    $('a.smooth-scroll').on('click', function(event) {
        event.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    });
});

// Chart.js initialization for risk distribution chart
var ctxRisk = document.getElementById('riskDistributionChart').getContext('2d');
var riskDistributionChart = new Chart(ctxRisk, {
    type: 'bar',
    data: {
        labels: ['Low', 'Medium', 'High'],
        datasets: [{
            label: 'Risk Distribution',
            data: [12, 19, 7],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Chart.js initialization for fraud attempts chart
var ctxFraud = document.getElementById('fraudAttemptsChart').getContext('2d');
var fraudAttemptsChart = new Chart(ctxFraud, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Fraud Attempts',
            data: [30, 20, 50, 40],
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Chart.js initialization for ML model performance chart
var ctxML = document.getElementById('mlPerformanceChart').getContext('2d');
var mlPerformanceChart = new Chart(ctxML, {
    type: 'doughnut',
    data: {
        labels: ['Accuracy', 'Precision', 'Recall'],
        datasets: [{
            label: 'ML Model Performance',
            data: [90, 85, 80],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            hoverBackgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(255, 99, 132, 1)']
        }]
    },
    options: {
        responsive: true
    }
});