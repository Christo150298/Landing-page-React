import React from "react";

const MyJumbotron = () => {
    return(
        <div class="jumbotron bg-secondary rounded">
            <h1 class="display-4 m-3">El Mundial de Argentina</h1>
            <p class="lead m-3 text-white">Leo Messi consigue la Copa del Mundo para su país y rompe una sequía albiceleste desde el campeonato conquistado con Maradona en 1986 en México. 
                                           A continuación vemos un repaso de los mejores momentos del mundial del conjunto de Lionel Scaloni.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg m-3" href="https://elpais.com/deportes/mundial-futbol/2022-12-18/argentina-gana-su-tercer-mundial-al-segundo-intento-en-ocho-anos.html" role="button">Mas información</a>
            </p>
        </div>
    );
}

export default MyJumbotron;