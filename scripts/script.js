console.log("credits:");
console.log("https://github.com/levinunnink/html-form-to-google-sheet");

//the old-fashioned way
// window.addEventListener("load", function () {
//   const form = document.getElementById('contacto');
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const data = new FormData(form);
//     const action = e.target.action;
//     fetch(action, {
//       method: 'POST',
//       body: data,
//     })
//       .then(() => {
//         alert("registrado correctamente");
//       })
//   });
// });


// starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        const data = new FormData(form);
        const action = event.target.action;
        fetch(action, {
          method: 'POST',
          body: data
        })
          .then(() => {
            alert("registrado correctamente");
            // form.reset();
            location.reload();
          });
      }
      form.classList.add('was-validated');
    }, false);
  })
})()


// OTHER FUNCS

function mostrarCampo(valor) {
  var campoAdicional = document.getElementById("campoAdicional");
  if (valor === "si") {
    campoAdicional.style.display = "block";
  } else {
    campoAdicional.style.display = "none";
  }
}