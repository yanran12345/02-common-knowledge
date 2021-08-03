/** 有关ts的一些高级用法 */
interface IUser {
  name: string;
  age?: number;
  class?: string;
  sex: string;
}
// 1、keyof：作用是获取键
type keys = keyof IUser;
// 2、Pick：从类型定义的属性中，选取指定一组属性，返回一个新的类型定义。
type Pick<T, K extends keyof T> = {[P in K]: T[P]};

type IPG = Pick<IUser, 'name'>
let gg: IPG = {
  name: '5'
}
// 3、Record：以 typeof 格式快速创建一个类型，此类型包含一组指定的属性且都是必填。
type Record<K extends keyof any, T> = {[P in K]: T};
type IRH = Record<keyof IUser, string>
let hh: IRH = {
  name: '6',
  age: '6',
  class: '6',
  sex: '0'
}
// 4、Partial： 将传入的属性变为可选项
type Partial<T> = { [p in keyof T]?: T[p] };
type IPB = Partial<IUser>;
let bb: IPB = {
  name: '1',
  age: 1
}
// 5、Required：将传入的属性变为必选项
type Required<T> = { [P in keyof T]-?: T[P] };
type IRC = Required<IUser>;
let cc: IRC = {
  name: '2',
  age: 2,
  class: '2',
  sex: '0'
}
// 6、Exclude ：的作用是两个参数对比过滤出前面参数独有的。
type Exclude<T, U> = T extends U ? never : T;
type IED = '1' | '2' | '3';
type IEE = '4';
let dd: Exclude<IED, IEE> = '1'
// 7、Omit ：的作用是将前面参数中后面的属性过滤掉
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type IOF = Omit<IUser, 'sex'>
let ff: IOF = {
  name: '4',
  age: 4,
  class: '4',
}