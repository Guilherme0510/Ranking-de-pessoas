const editBtn = document.getElementById("edit");
const saveBtn = document.getElementById("save");
const ranking = document.getElementById("ranking");
const overlay = document.getElementById("overlay");
const firstName = document.getElementById("first_name");
const secondName = document.getElementById("second_name");
const thirdName = document.getElementById("third_name");
const firstInput = document.getElementById("first_input");
const secondInput = document.getElementById("second_input");
const thirdInput = document.getElementById("third_input");
const firstSale = document.getElementById("first_sale");
const secondSale = document.getElementById("second_sale");
const thirdSale = document.getElementById("third_sale");
const firstVendaValue = document.getElementById("first_venda_value");
const secondVendaValue = document.getElementById("second_venda_value");
const thirdVendaValue = document.getElementById("third_venda_value");
const img_first = document.getElementById("img_first");
const img_second = document.getElementById("img_second");  
const img_third = document.getElementById("img_third");    

const operators = {
  Filipe: '../img/filipe.jpg',
  Gabriela: '../img/gabriela.jpg',
  Matheus: '../img/matheus.jpg',
  Kaike: '../img/kaike.jpg',
  Jonathan: '../img/jonathan.jpg'
};

const Edit = () => {
  ranking.classList.add("hidden");
  saveBtn.classList.remove("hidden");
  editBtn.classList.add("hidden");
  overlay.classList.remove("hidden");
};

const Save = () => {
  ranking.classList.remove("hidden");
  saveBtn.classList.add("hidden");
  editBtn.classList.remove("hidden");
  overlay.classList.add("hidden");

  [firstName, secondName, thirdName].forEach((element, index) => {
    const inputs = [firstInput, secondInput, thirdInput];
    element.innerHTML = inputs[index].value;
  });

  [firstSale, secondSale, thirdSale].forEach((element, index) => {
    const vendas = [firstVendaValue, secondVendaValue, thirdVendaValue];
    element.innerHTML = vendas[index].value;
  });

  updateImage(firstInput.value, img_first);   
  updateImage(secondInput.value, img_second); 
  updateImage(thirdInput.value, img_third);   
};

const updateImage = (name, imgElement) => {
  console.log(`Atualizando imagem para: ${name}, no elemento: ${imgElement.id}`);
  
  if (operators[name]) {
    console.log(`Imagem encontrada: ${operators[name]}`);
    imgElement.src = operators[name];
  } else {
    console.log('Imagem não encontrada, removendo.');
    imgElement.src = ''; 
  }
};
