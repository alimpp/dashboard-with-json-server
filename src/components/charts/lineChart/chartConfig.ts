export const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "March",
    "April",
    "May",
    "June",
    "July",
  ],
  datasets: [
    {
      label: "Data Flow",
      backgroundColor: "yellow",
      pointRadius: '0',
      borderColor: 'yellow',
			tension: 0.5,
      data: [40, 39, 10, 40, 39, 80, 40, 40, 39, 10, 40],
    },
    {
      label: "Data Config",
      backgroundColor: "#4461F2",
      pointRadius: '0',
      borderColor: '#4461F2',
			tension: 0.5,
      data: [10, 23, 35, 44, 56, 66, 66, 81, 99, 30, 90],
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {},
}
