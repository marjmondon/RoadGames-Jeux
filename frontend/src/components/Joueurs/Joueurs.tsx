import React from 'react';
import Form, { UserForm } from "./Form";

function Joueurs() {
    function handleSubmit(formData: UserForm) {
        console.log(formData);
        //appel du serveur
    }
    return (
        <div>
            <h1>Ajoutez des joueurs: </h1>
            <Form onSubmit={handleSubmit} />
        </div>
    );
}

export default Joueurs