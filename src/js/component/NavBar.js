import React from "react";

const MyNabvar = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-1" data-bs-theme="dark">
            <h3 className="text-secondary ms-2">Start Bootrstrap</h3>
            <button class="navbar-toggler justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
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
        </nav>
    );
}

export default MyNabvar;
