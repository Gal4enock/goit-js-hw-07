
const refs = {
  list: document.querySelector(".categories"),
  items: document.querySelectorAll (".item")
}
const category =[...refs.items].map(el => {
  let title = el.querySelector("h2").textContent;
  let count = el.children[1].querySelectorAll("li").length
  console.log(`Категория: ${title}\nКоличество элементов: ${count}\n`); 
})
