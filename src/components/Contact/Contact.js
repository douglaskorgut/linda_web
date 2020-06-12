import React from 'react';
import classes from './Contact.module.css';

const contact = (props) => {
    return (
        <div className={classes.Contact}>

            <div className="container-contact100">
                <div className="wrap-contact100">
                    <form className={classes.Form}>
                        <span className={classes.Title}>
                           Mande uma mensagem
                        </span>

                        <div className={classes.InputEmail} data-validate="Por favor, insira um usuário nome válido">
                            <input type="text" name="name" placeholder="Nome completo"/>
                            <span></span>
                        </div>

                        <div className={classes.InputEmail} data-validate="Por favor, insira um e-mail válido: e@a.x">
                            <input type="text" name="email" placeholder="E-mail"/>
                            <span></span>
                        </div>

                        <div className={classes.InputEmail} data-validate="Por favor, insira um número de telefone válido.">
                            <input type="text" name="phone" placeholder="Número de telefone: (DDD) 9XXXX-XXXX"/>
                            <span></span>
                        </div>

                        <div className={classes.InputEmail} data-validate="Por favor, insira uma mensagem valida">
                            <textarea name="message" placeholder="Insira sua mensagem aqui"></textarea>
                            <span></span>
                        </div>

                        <div className={classes.Button}>
                            <button>
                            <span>
                                <i className="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
                                Enviar
                            </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
};

export default contact;
