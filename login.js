const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", async function (event) {
    event.preventDefault();

    console.log("Formulario enviado");

    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    console.log("Correo:", correo);
    console.log("Contraseña capturada:", password.length > 0);

    const datos = {
        correo: correo,
        password: password
    }

    try {
        const respuesta = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });

        if(respuesta.ok) {
            console.log("Login exitoso");
        } else {
            console.log("Error en el login", respuesta.status);
        }
    } catch (error) {
        console.error("Error en la solicitud", error);
    }
});

