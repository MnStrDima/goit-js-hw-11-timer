export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.intervalId = null;
    this._selector = selector;
    this._targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${selector} [data-value="days"]`),
      hours: document.querySelector(`${selector} [data-value="hours"]`),
      mins: document.querySelector(`${selector} [data-value="mins"]`),
      secs: document.querySelector(`${selector} [data-value="secs"]`),
    };
  }

  init() {
    this.intervalId = setInterval(() => {
      const startTime = Date.now();
      const deltaTime = this._targetDate - startTime;
      const time = this._getTimeComponents(deltaTime);
    }, 1000);
  }

  _getTimeComponents(time) {
    this.refs.days.textContent = this._padTime(
      Math.floor(time / (1000 * 60 * 60 * 24)),
    );
    this.refs.hours.textContent = this._padTime(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.refs.mins.textContent = this._padTime(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    this.refs.secs.textContent = this._padTime(
      Math.floor((time % (1000 * 60)) / 1000),
    );
  }

  _padTime(value) {
    return String(value).padStart(2, '0');
  }
}
