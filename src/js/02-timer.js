import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
// -------
// 1-Знати детлайн
// 2-поточна дата
// 3-різниця 1 і 2
// 4- конвертувати різницю
// 5- відобразити

const deadline = new Date();
const todey = new Date();
