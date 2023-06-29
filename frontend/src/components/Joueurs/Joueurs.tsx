import React from 'react';
import Form from "./Form";

function Joueurs() {
    function handleSubmit(formData: FormData) {
        console.log(formData);
    }
    return (
        <div>
            <h1>Ajoutez des joueurs: </h1>
            <Form onSubmit={handleSubmit} />
        </div>
    );
}

export default Joueurs