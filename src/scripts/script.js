inventorySelect = document.getElementById('select-inventory');
employeeSelect = document.getElementById('select-employee');

inventoryContent = document.getElementById('inventory');
employeeContent = document.getElementById('employee');

preloader = document.getElementById('page-preloader');


document.body.onload = function(){
    showInventory();
        setTimeout(function(){
            if ( !preloader.classList.contains('done') ) 
            {
                preloader.classList.add('done');
            } 
        }, 1000);

} 

    inventorySelect.onclick = showInventory;

    employeeSelect.onclick = showEmployee;

        function showInventory() {
            document.title ="Инвентарные единицы | Главная страница";

            inventorySelect.style.background="#578530";
            employeeSelect.style.background="#fff";
            inventoryContent.style.display="grid";

            employeeContent.style.display="none";
        };
        function showEmployee() {
            document.title ="Сотрудники | Главная страница";

            inventorySelect.style.background="#fff";
            employeeSelect.style.background="#578530";

            employeeContent.style.display="grid";
            inventoryContent.style.display="none";
        };