let inventorySelect = document.getElementById('select-inventory');
let employeeSelect = document.getElementById('select-employee');

let inventoryContent = document.getElementById('inventory');
let employeeContent = document.getElementById('employee');

let preloader = document.getElementById('page-preloader');


window.onload = function(){
  if(document.cookie=="content=inventory")
  {
  selectContent("inventory");
  }
  else if(document.cookie=="content=employee")
  {
  selectContent("employee");
  }
  else
  {
      selectContent("inventory");
  }

  setTimeout(function(){
      if ( !preloader.classList.contains('done') ) 
      {
          preloader.classList.add('done');
      } 
  }, 1000);
}       

  inventorySelect.addEventListener('click', ()=>{
    deleteCookie("content");
    selectContent("inventory");
    setCookie("content", "inventory", {
        expires: 0 //куки будут храниться до закрытия браузера
        });
  });
  // inventorySelect.onclick = function(){

  // }

  employeeSelect.addEventListener('click', ()=>{
      deleteCookie("content");
      selectContent("employee");
      setCookie("content", "employee", {
          expires: 0
          });
  });

  let selectContent = (content) => { //функция выбора контента

  if(content == "inventory") 
  {
    if(!inventorySelect.classList.contains('active')) 
    {
        document.title ="Инвентарные единицы | Главная страница";

        inventorySelect.classList.add('active');
        employeeSelect.classList.remove('active');

        inventoryContent.classList.add('show');
        employeeContent.classList.remove('show');
    }
  }
  else if (content == "employee") 
  {
    if ( !employeeSelect.classList.contains('active') ) 
    {
        document.title ="Сотрудники | Главная страница";

        employeeSelect.classList.add('active');
        inventorySelect.classList.remove('active');

        employeeContent.classList.add('show');
        inventoryContent.classList.remove('show');
    }

  }
  };

let setCookie = (name, value, options) => { //функция добавления в куки выбранного контента
  options = options || {};
  
  let expires = options.expires;
  
  if (typeof expires == "number" && expires) {
      let d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
  }
  
  value = encodeURIComponent(value);
  
  let updatedCookie = name + "=" + value;
  
  for (let propName in options) {
      updatedCookie += "; " + propName;
      let propValue = options[propName];
      if (propValue !== true) {
      updatedCookie += "=" + propValue;
      }
  }
  
  document.cookie = updatedCookie;
  }

  let deleteCookie = (name) => {//функция удаления из куки ранее выбранного контента
    setCookie(name, "", {
    expires: -1
    })
  }