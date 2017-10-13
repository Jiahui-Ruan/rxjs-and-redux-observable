var subject = new Rx.Subject();

subject.subscribe({
  next: function(val) {
    console.log(val);
  },
  error: function(err) {
    console.log(err);
  },
  complete: function() {
    console.log('Complete');
  }
});

subject.subscribe({
  next: function(val) {
    console.log(val);
  }
});

subject.next('A new data');
