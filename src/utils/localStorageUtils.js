
// 保存数据到浏览器的缓存中
export function saveLocalStorage(Item) {
    localStorage.setItem('todos_key', JSON.stringify(Item))
}
// 从浏览器的缓存中读取数据
export function readLocalStorage() {
    return JSON.parse(localStorage.getItem('todos_key') || '[]')
}