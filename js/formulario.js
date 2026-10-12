const formulario = document.getElementById("formulario");
                const respuesta = document.getElementById("respuesta");

                formulario.addEventListener("submit", async function(event) {
                    event.preventDefault();

                    respuesta.textContent = "Enviando mensaje...";

                    try {
                        const envio = await fetch(formulario.action, {
                            method: "POST",
                            body: new FormData(formulario),
                            headers: {
                                "Accept": "application/json"
                            }
                        });

                        if (envio.ok) {
                            window.location.href = "gracias.html";
                        } else {
                            respuesta.textContent =
                                "No se pudo enviar el mensaje. Intente nuevamente.";
                        }

                    } catch (error) {
                        respuesta.textContent =
                            "Ocurrió un error de conexión. Intente nuevamente.";
                    }
                });