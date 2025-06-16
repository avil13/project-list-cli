export const clc = {
  _red: '\x1b[31m',
  _green: '\x1b[32m',
  _yellow: '\x1b[33m',
  _blue: '\x1b[34m',
  _greenBg: '\x1b[42m',
  _redBg: '\x1b[41m',
  _blueBg: '\x1b[44m',
  _cyan: '\x1b[0;36m',
  _white: '\x1b[0;37m',
  _gray: '\x1b[0;90m',
  _right: '\x1b[46G',
  _off: '\x1b[0m',

  color(...args: string[]) {
    const color = args[0];
    const str = args[1];
    const left = args.splice(2);

    return (
      `${color}${str}${this._off}` + (left.length ? ' ' + left.join(' ') : '')
    );
  },

  greenOrRed(isVal: boolean, ...strList: string[]) {
    return isVal === true
      ? this.green.apply(this, strList)
      : this.red.apply(this, strList);
  },
  greenOrRedBg(isVal: boolean, ...strList: any) {
    return isVal === true
      ? this.greenBg.apply(this, strList)
      : this.redBg.apply(this, strList);
  },

  greenBg(str1: string, str2: string) {
    let str = this.color(this._greenBg, ` ${str1} `);
    if (str2) {
      str += ' ' + this.color(this._green, str2);
    }
    return str;
  },
  redBg(str1: string, str2: string) {
    let str = this.color(this._redBg, ` ${str1} `);
    if (str2) {
      str += ' ' + this.color(this._red, str2);
    }
    return str;
  },
  blueBg(str1: string, str2: string) {
    let str = this.color(this._blueBg, ` ${str1} `);
    if (str2) {
      str += ' ' + this.color(this._blue, str2);
    }
    return str;
  },

  green(...args: string[]) {
    return this.color.apply(this, [this._green, ...args]);
  },
  red(...args: string[]) {
    return this.color.apply(this, [this._red, ...args]);
  },
  yellow(...args: string[]) {
    return this.color.apply(this, [this._yellow, ...args]);
  },
  blue(...args: string[]) {
    return this.color.apply(this, [this._blue, ...args]);
  },
  cyan(...args: string[]) {
    return this.color.apply(this, [this._cyan, ...args]);
  },
  white(...args: string[]) {
    return this.color.apply(this, [this._white, ...args]);
  },
  gray(...args: string[]) {
    return this.color.apply(this, [this._gray, ...args]);
  },
}
