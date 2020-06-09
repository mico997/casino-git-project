Slot.prototype.start = function() {
    var _this = this;
    $(_this.el).addClass('motion');
    $(_this.el).spStart();
    _this.si = window.setInterval(function() {
        if(_this.speed < _this.maxSpeed) {
            _this.speed += _this.step;
            $(_this.el).spSpeed(_this.speed);
        }
    }, 100);
};