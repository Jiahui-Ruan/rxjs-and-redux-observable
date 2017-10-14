var input = document.querySelector('input');
var observable = Rx.Observable.fromEvent(input, 'input');

observable
  .debounceTime(500)
  .pluck('target', 'value')
  .distinctUntilChanged()
  .subscribe({
    next: function(value) {
      console.log(value);
    }
  })
