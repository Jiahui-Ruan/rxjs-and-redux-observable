var observable = Rx.Observable.interval(1000);

var observer = {
  next: function(val) {
    console.log(val);
  }
}

observable.map(function(value) {
  return 'Number: ' + value;
}).throttleTime(2000).subscribe(observer);
