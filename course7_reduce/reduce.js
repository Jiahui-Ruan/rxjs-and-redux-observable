var observable = Rx.Observable.of(1,2,3,4,5);

// infinite observable can only use scan to detect
// since it collects every output from the begining
// reduce can only apply to finite observable in order to
// collect the final result

observable
  .scan((total, curVal) => {
    return total + curVal;
  }, 0)
  .subscribe({
    next: function(val) {
      console.log(val);
    }
  })
