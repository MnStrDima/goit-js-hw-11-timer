import './styles.css';
import { CountdownTimer } from './js/countdownTimer';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 05, 2021'),
});

document.addEventListener('DOMContentLoaded', timer.init.bind(timer));
