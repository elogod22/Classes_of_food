
            // Define the table data for the classes of food
            const classesOfFood = [
                { name: "Carbohydrates", examples: "Rice, Bread, Pasta" },
                { name: "Proteins", examples: "Meat, Fish, Beans" },
                { name: "Fats", examples: "Butter, Oils, Nuts" },
                { name: "Vitamins", examples: "Fruits, Vegetables" },
                { name: "Minerals", examples: "Salt, Milk, Spinach" },
                { name: "Water", examples: "Drinking water, Juices" },
            ];
    
            // Create the table element
            const table = document.createElement("table");
    
            // Create the table header row
            const headerRow = document.createElement("tr");
            const headers = ["Class of Food", "Examples"];
            headers.forEach(headerText => {
                const th = document.createElement("th");
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);
    
            // Create rows for each class of food
            classesOfFood.forEach(foodClass => {
                const row = document.createElement("tr");
    
                // Create a cell for the class name
                const nameCell = document.createElement("td");
                nameCell.textContent = foodClass.name;
                row.appendChild(nameCell);
    
                // Create a cell for the examples
                const examplesCell = document.createElement("td");
                examplesCell.textContent = foodClass.examples;
                row.appendChild(examplesCell);
    
                table.appendChild(row);
            });
    
            // Append the table to the body
            document.body.appendChild(table);
        