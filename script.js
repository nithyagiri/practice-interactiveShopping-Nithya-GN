
    const itemInput = document.getElementById('itemInput');
    const addItemBtn = document.getElementById('addItemBtn');
    const shoppingList = document.getElementById('shoppingList');

    // Add item when button is clicked
    addItemBtn.addEventListener('click', function () {
      const itemText = itemInput.value.trim();

      if (itemText !== '') {
        // Create new list item
        const li = document.createElement('li');
        li.textContent = itemText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = function () {
          shoppingList.removeChild(li);
        };

        // Add button to list item and list item to the list
        li.appendChild(removeBtn);
        shoppingList.appendChild(li);

        // Clear input
        itemInput.value = '';
      } else {
        alert('Please enter an item.');
      }
    });
 