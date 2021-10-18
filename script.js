fetch('https://catfact.ninja/fact?max_length=140')
    .then(data => data.json())
    .then(fact => {
        var text = fact['fact'];
        var factElement = document.getElementById('factElement');
        factElement.innerHTML = text;
    })