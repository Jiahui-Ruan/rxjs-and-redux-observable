var button = document.querySelector('button');
// button.addEventListener('click', (event) => console.log(event));

var observer = {
  next: function(value) {
    console.log(value);
  },
  error: function(error) {
    console.log(error);
  },
  complete: function() {
    console.log('Completed');
  }
}

// Rx.Observable.fromEvent(button, 'click')
//   .throttleTime(1000)
//   .map((data) => {return data.clientY})
Rx.Observable.create(function(obs) {
  obs.next('A value');
  setTimeout(function() {
    obs.complete();
  }, 2000);
  obs.next('A second value');
})
  .subscribe(observer)
