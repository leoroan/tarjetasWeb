console.log("credits:");
console.log("https://github.com/levinunnink/html-form-to-google-sheet");

window.addEventListener("load", function () {
  const form = document.getElementById('contacto');
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
      .then(() => {
        alert("registrado correctamente");
      })
  });
});
