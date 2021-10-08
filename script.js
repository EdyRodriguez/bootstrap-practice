function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

addEvent(document, 'mouseout', function (evt) {
    var modalId = 'exitModal';
    if (evt.toElement === null && evt.relatedTarget === null && !localStorage.getItem('modal.' + modalId)) {
        var modal = new bootstrap.Modal('#' + modalId);
        modal.show();
        localStorage.setItem('modal.' + modalId, '1');
    }
});

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}