var button = document.querySelector('button');
var div = document.querySelector('div');
var clickEmitted = new Rx.BehaviorSubject('Not clicked');

button.addEventListener('click', () => clickEmitted.next('click'));

clickEmitted.subscribe(
  (value) => div.textContent = value
)
