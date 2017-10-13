var observable = Rx.Observable.interval(1000);

observable
.filter(function(data) {
  return data % 2 == 1;
})
.subscribe({
  next: function(val) {
    console.log(val)
  }
})
