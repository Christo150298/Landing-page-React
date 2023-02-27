import React from "react";

const MyNabvar = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark p-1" data-bs-theme="dark">
            <h3 className="text-secondary ms-2 text-white">Start Bootrstrap</h3>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav d-flex justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link text-white text-end me-2" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white text-end me-2" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white text-end me-2" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white text-end me-2" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MyNabvar;
