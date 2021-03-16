import { Arg } from '@avil13/arg';

const arg = new Arg();

console.log('=>', arg.isEmpty);

// Если нет глобального конфига, предлагаем создать
//
// если нет комманды, то показываем хэлп и список сохраненных проектов (ls)
// [ help, ls, add (in folder), rm (in folder)]
//
