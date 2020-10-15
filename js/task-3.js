const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
let elementList = document.querySelector("#gallery")
console.log(elementList);
elementList.insertAdjacentHTML('beforebegin', "<h2> Gallery </h2>")
images.map(el => {
  const { url, alt } = el;
  elementList.insertAdjacentHTML('afterbegin', `<li><img src="${url}" class="img" width="370" height="294" alt="${alt}"></li>`); 
})
