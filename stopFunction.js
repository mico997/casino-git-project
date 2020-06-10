Slot.prototype.stop = function() {
    var _this = this,
        limit = 30;
    clearInterval(_this.si);
    _this.si = window.setInterval(function() {
        if(_this.speed > limit) {
            _this.speed -= _this.step;
            $(_this.el).spSpeed(_this.speed);
        }
        if(_this.speed <= limit) {
            _this.finalPos(_this.el);
            $(_this.el).spSpeed(0);
            $(_this.el).spStop();
            clearInterval(_this.si);
            $(_this.el).removeClass('motion');
            _this.speed = 0;
        }
    }, 100);
};