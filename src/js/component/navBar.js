import React from "react";

function MyNabvar(){
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-1" data-bs-theme="dark">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link text-secondary" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-secondary" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-secondary" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-secondary" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
    );
}

export default MyNabvar;