
var types = {
    Box1:"⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏",
    Box2: "⠋⠙⠚⠞⠖⠦⠴⠲⠳⠓",
    Box3: "⠄⠆⠇⠋⠙⠸⠰⠠⠰⠸⠙⠋⠇⠆",
    Box4: "⠋⠙⠚⠒⠂⠂⠒⠲⠴⠦⠖⠒⠐⠐⠒⠓⠋",
    Box5: "⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠴⠲⠒⠂⠂⠒⠚⠙⠉⠁",
    Box6: "⠈⠉⠋⠓⠒⠐⠐⠒⠖⠦⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈",
    Box7: "⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈",
    Spin1: "|/-\\",
    Spin2: "◴◷◶◵",
    Spin3: "◰◳◲◱",
    Spin4: "◐◓◑◒",
    Spin5: "▉▊▋▌▍▎▏▎▍▌▋▊▉",
    Spin6: "▌▄▐▀",
    Spin7: "╫╪",
    Spin8: "■□▪▫",
    Spin9: "←↑→↓"
};

function Spinner(type) {
    this.type = type;
    this.frame = 0;
    this.length = type.length;
    this.current = this.type[this.frame % this.length];
};

Spinner.prototype.reset = function () {
    this.frame = 0;
};

Spinner.prototype.next = function () {
    this.current = this.type[this.frame % this.length];
    this.frame++;
    return this.current;
};

module.exports.types = types;
module.exports.new = function (type) {
    if (!type) {
        type = types.Box1;
    }
    return new Spinner(type);
};
