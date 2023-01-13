export const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [
      {
        label: 'Data Flow in Server',
        backgroundColor: 'lightblue',
        data: [22, 25, 12, 78, 89, 42, 31, 89, 10, 60, 67, 89]
      },
      {
        label: 'Data Flow in client',
        backgroundColor: 'yellow',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      },
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  