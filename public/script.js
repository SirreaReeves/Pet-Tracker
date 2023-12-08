const petForm = document.querySelector('#pet-form');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData);
    console.log(obj)
    fetch('/addpets', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(data => console.log(data));
};

function renderPetList(data) {
    const petList = document.querySelector('#pet-list');
    console.log(data)

    data.forEach(pet => {
        const li = document.createElement('li');
        li.innerHTML = ` <li>
        <h3>${pet.pet_name}</h3>
        <img src="${pet.picture_url}" alt="">
        <p>${pet.is_friendly}</p>
        <p>Species: ${pet.species}</p>
    </li>`
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            fetch(`/deletepets${pet.id}`, {
                method: "DELETE"
            })
            li.remove();
        })
        li.appendChild(removeButton);
        petList.appendChild(li);
    });
};

fetch('/getpets')
    .then((res) => res.json())
    .then((pets) => renderPetList(pets));

petForm.addEventListener('submit', handleSubmit);