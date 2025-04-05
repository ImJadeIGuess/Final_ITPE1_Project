function goBack() {   window.location.href = 'main.html';
  }
  

  const audio = new Audio("music22.mp3");
  audio.loop = true;
  
  function toggleMusic() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  
  

  document.addEventListener('DOMContentLoaded', function() {
   
    const ctx1 = document.getElementById('graph1').getContext('2d');
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Revenue',
          data: [10, 20, 15, 25, 30],
          backgroundColor: 'rgba(255, 102, 0, 0.5)',
          borderColor: 'rgba(255, 102, 0, 1)',
          borderWidth: 2,
          fill: true
        }]
      }
    });
  
    const ctx2 = document.getElementById('graph2').getContext('2d');
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Product A', 'Product B', 'Product C'],
        datasets: [{
          label: 'Sales',
          data: [50, 75, 60],
          backgroundColor: [
            'rgba(255, 102, 0, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 205, 86, 0.5)'
          ],
          borderColor: [
            'rgba(255, 102, 0, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)'
          ],
          borderWidth: 1
        }]
      }
    });
  
 
const ctx3 = document.getElementById('graph3').getContext('2d');
new Chart(ctx3, {
  type: 'pie',
  options: {
    responsive: true,
    maintainAspectRatio: false, 
  },
  data: {
    labels: ['Online', 'In-store', 'Other'],
    datasets: [{
      data: [300, 150, 100],
      backgroundColor: [
        'rgba(255, 102, 0, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)'
      ],
      borderColor: [
        'rgba(255, 102, 0, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  }
});
  

    const ctx4 = document.getElementById('graph4').getContext('2d');
    new Chart(ctx4, {
      type: 'radar',
      data: {
        labels: ['Metric A', 'Metric B', 'Metric C', 'Metric D', 'Metric E'],
        datasets: [{
          label: 'Performance',
          data: [65, 59, 80, 81, 56],
          backgroundColor: 'rgba(255, 102, 0, 0.5)',
          borderColor: 'rgba(255, 102, 0, 1)',
          borderWidth: 2,
          fill: true
        }]
      }
    });
  
 
    const ctx5 = document.getElementById('graph5').getContext('2d');
    new Chart(ctx5, {
      type: 'doughnut',
      data: {
        labels: ['Segment 1', 'Segment 2', 'Segment 3'],
        datasets: [{
          data: [120, 150, 100],
          backgroundColor: [
            'rgba(255, 102, 0, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)'
          ],
          borderColor: [
            'rgba(255, 102, 0, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      }
    });
  

    const ctx6 = document.getElementById('graph6').getContext('2d');
    new Chart(ctx6, {
      type: 'polarArea',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
          data: [11, 16, 7, 3],
          backgroundColor: [
            'rgba(255, 102, 0, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)'
          ],
          borderColor: [
            'rgba(255, 102, 0, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      }
    });
  });
  
  