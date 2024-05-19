// [掘竅] 了解這些，更快掌握 TypeScript 在 React 中的使用（Using TypeScript in React）
// https://pjchender.dev/react/guide-typescript-react-tips/

let occupation: string // 宣告 occupation 的型別為 string
occupation = 'programmer' // 想要把 occupation 的值帶入數值
let height: number = 170 // 宣告 height 的型別為 number，並且同時賦值

/* 宣告型別為物件 */
const person: {
    name: string
    age: number
    occupation?: string // 在 : 前面加上 ? 表示該屬性不是必填
} = {
    name: 'pjchender',
    age: 32,
}
// person.gender : string = 'male' // TS2339
// error TS2339: Property 'x' does not exist on type 'Y'
// https://stackoverflow.com/questions/38324949/error-ts2339-property-x-does-not-exist-on-type-y
const newPerson: any = person
newPerson.gender = 'male'
console.log('person', person) // { name: 'pjchender', age: 32, gender: 'male' }
console.log('newPerson', newPerson) // { name: 'pjchender', age: 32, gender: 'male' }
const newPerson2: any = { ...person }
newPerson2.height = 180
console.log('person', person) // { name: 'pjchender', age: 32, gender: 'male' }
console.log('newPerson', newPerson) // { name: 'pjchender', age: 32, gender: 'male' }
console.log('newPerson2', newPerson2) // { name: 'pjchender', age: 32, gender: 'male', height: 180 }
console.log('============================')
console.log('============================')

/* 宣告型別為字串陣列*/
const devices: string[] = ['iphone', 'pixel', 'ipad', 'note 10']
/* 宣告陣列中的元素可以是字串或數值 */
const luckyItem: (string | number)[] = [4, 7, 11, 'phone', 'pad']
// 另一種寫法
const luckyItem2: Array<string | number> = [4, 7, 11, 'phone', 'pad']
console.log('============================')
console.log('============================')

/* 宣告型別為函式 */
const add = (x: number, y: number): number => {
    return x + y
}
console.log('add', add(3, 5)) // 8
const add2 = (x: number, y: number): boolean => {
    return x > 5 || x + y > 8
}
console.log('add2', add2(3, 5)) // false

/* 宣告型別為函式，參數的地方使用物件的解構賦值 */
const add3 = ({ x, y }: { x: number; y: number }): number => {
    return x + y
}
console.log('add3', add3({ x: 3, y: 5 })) // 8

/* 函式不會有回傳值時使用 void */
const add4 = (x: number, y: number): void => {
    console.log('add4 void', x + y)
}
add4(3, 5) // void 8

/* 該函式不會執行完成的話，使用 never */
// const add5 = (x: number, y: number): never => {
//     throw new Error()
// }
// add5(3, 5) // Error
// const add6 = (x: number, y: number): number => {
//     if (x < y) throw new Error()
//     return x + y
// }
// console.log('add6', add6(3, 5)) // Error
console.log('============================')
console.log('============================')

/* 宣告型別為 undefined 或 null */
let foo: undefined
let bar: null = null
console.log('foo', foo) // undefined
console.log('bar', bar) // null
console.log('============================')
console.log('============================')

// literal type
// 實際上型別也可以是定死某個值
let occupation2: 'Programmer' = 'Programmer'
// occupation2 = 'Designer' // TS2322 類型 'Designer' 不可指派給類型 'Programmer'
// 這種型別在 TS 中稱作 literal type[3]，它可以是字串或數值，並且經常會搭配聯集（|）來使用
// 這時候 brand 這個變數的值就只能是這三個字串中的其中一種，否則都會報錯。
let brand: 'iphone' | 'samsung' | 'sony'
brand = 'iphone'
console.log('brand', brand) // iphone

let brand2: 'iphone' | 'samsung' | 'sony' | ['nike'] = ['nike']
console.log('brand2', brand2) // [ 'nike' ]
// let brand3: 'iphone' | 'samsung' | 'sony' | ['nike'] = ['adidas'] // TS2322
// let brand4: 'iphone' | 'samsung' | 'sony' | ['nike', 'adidas'] = ['adidas'] // TS2322
console.log('============================')
console.log('============================')

// TypeScript 會自己推論型別，不用所有變數都主動定義型別
let text = 'text' // let text: string
// text = 1 // TS2322
const text2 = 'text2' // const text2: 'text2'

// 抽象化：使用型別化名（type alias）
// 使用 type
type Book = {
    name: string
    price: number
}
// 在 : 後放入的是命名過的型別
const book1: Book = {
    name: 'Learn TypeScript',
    price: 300,
}

// 使用聯集（union）和交集（intersection）
// 使用聯集（|）或交集（&）來做一些變化。這裡的聯集比較像是「或」的概念，而交集比較像是「且」的概念。
type Device = {
    brand: string
    releasedAt: string
}
type Product = Book | Device // 只符合其中一類的話，就能算是 Product，這時候可以使用聯集
// book2 這個變數符合 Product Type，因為只要符合 Book Type 或 Device Type 其中之一即可符合 Product Type
const book2: Product = {
    name: 'Learn TypeScript',
    price: 300,
}
const book3: Product = {
    name: 'Learn TypeScript',
    brand: 'apple',
    price: 300,
}
console.log('book3', book3) // { name: 'Learn TypeScript', brand: 'apple', price: 300 }
// const book4: Product = {
//     brand: 'apple',
//     price: 300,
// } // TS2322
console.log('============================')
console.log('============================')
// 交集的概念就類似「且」，交集的語法是 &
type Software = {
    platform: string
    releasedAt: string
}
type Hardware = {
    RAM: string
    CPU: string
}
type MobilePhone = Software & Hardware
const iphone11: MobilePhone = {
    platform: 'ios',
    releasedAt: '20190919',
    RAM: '4GB',
    CPU: 'A13',
}
console.log('============================')
console.log('============================')

// 抽象化：使用介面（interface）
// Type Alias 和 Interface 基本上是不同的概念，雖然有時可以達到類似的效果。一般來說，若是要在 React 中定義 props 或 state 的型別時，慣例上會使用 Type Alias；當若某個元件是要開發給其他人使用到的套件，則這個元件中的 API 會建議使用 Interface，讓使用此套件的開發者更方便奠基在你提供的方法上再添加其他屬性。
interface Software2 {
    platform: string
    releasedAt: string
}
interface Hardware2 {
    RAM: string
    CPU: string
}
interface MobilePhone2 extends Software2, Hardware2 {
    price: number
    brand: string
} // 奠基在 Software2, Hardware2 上，再添加 price, brand 屬性
const iphone12: MobilePhone2 = {
    platform: 'ios',
    releasedAt: '20190919',
    RAM: '4GB',
    CPU: 'A13',
    price: 24900,
    brand: 'apple',
}
