inventorySelect = document.getElementById('select-inventory');
employeeSelect = document.getElementById('select-employee');

inventoryContent = document.getElementById('inventory');
employeeContent = document.getElementById('employee');

    window.onload = showInventory;

    inventorySelect.onclick = showInventory;

    employeeSelect.onclick = showEmployee;

        function showInventory() {
            document.title ="Инвентарные единицы | Главная страница";

            inventorySelect.style.background="#7BA7AB";
            employeeSelect.style.background="#fff";
            inventoryContent.style.display="grid";

            employeeContent.style.display="none";
        };
        function showEmployee() {
            document.title ="Сотрудники | Главная страница";

            inventorySelect.style.background="#fff";
            employeeSelect.style.background="#7BA7AB";

            employeeContent.style.display="grid";
            inventoryContent.style.display="none";
        };