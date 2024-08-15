import React from "react";

function LoginPanel(props) {
    return(
    <div className='container login-component'>
        <div className='row'>
            <h1>Connexion</h1>
            <form id="connexion-form" name='connexion-form'>
                <input id="identifier" name="identifier" className='form-control mb-3' type="text" placeholder="ID" />
                <input id="password" name="password" className='form-control mb-3' type="password" placeholder="Mot de passe" />
                <button id="submit" name="submit" type='button' onClick={props.login} className='btn btn-primary mb-3'>Connexion</button>
            </form>
        </div>
    </div>
)};

export default LoginPanel;
