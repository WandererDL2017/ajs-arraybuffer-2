import getBuffer from './buffer';

export default class ArrayBufferConverter {
  load(buffer) {
    this.str = String.fromCharCode.apply(null, new Uint16Array(buffer));
    this.objPers = JSON.parse(this.str);
    return this.objPers.data.user;
  }

  toString() {
    this.pers = this.load(getBuffer());
    return `ИД: ${this.pers.id}\nИмя: ${this.pers.name}\nУровень: ${this.pers.level}`;
  }
}
