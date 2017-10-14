var input = document.querySelector('input');
var observable = Rx.Observable.fromEvent(input, 'input');

observable
  .map(event => event.target.value)
  .debounceTime(2000)
  .distinctUntilChanged()
  .subscribe({
    next: function(val) {
      console.log(val);
    }
  })
