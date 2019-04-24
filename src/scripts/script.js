inventorySelect = document.getElementById('select-inventory');
employeeSelect = document.getElementById('select-employee');

inventoryContent = document.getElementById('inventory');
employeeContent = document.getElementById('employee');

preloader = document.getElementById('page-preloader');


    document.body.onload = function(){
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

        inventorySelect.onclick = function(){
            deleteCookie("content");
            selectContent("inventory");
            setCookie("content", "inventory", {
                expires: 0 //куки будут храниться до закрытия браузера
                })

        }
        employeeSelect.onclick = function(){
            deleteCookie("content");  
            selectContent("employee");
            setCookie("content", "employee", {
                expires: 0 //куки будут храниться до закрытия браузера
                })
        }

            function selectContent(content) { //функция выбора контента

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
    function setCookie(name, value, options) { //функция добавления в куки выбранного контента
        options = options || {};
        
        var expires = options.expires;
        
        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }
        
        value = encodeURIComponent(value);
        
        var updatedCookie = name + "=" + value;
        
        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
            updatedCookie += "=" + propValue;
            }
        }
        
        document.cookie = updatedCookie;
        }

        function deleteCookie(name) {//функция удаления из куки ранее выбранного контента
            setCookie(name, "", {
            expires: -1
            })
        }