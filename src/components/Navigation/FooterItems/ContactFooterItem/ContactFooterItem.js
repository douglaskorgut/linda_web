import React from "react";
import classes from './ContactFooterItem.module.css';
import FooterHeader from '../../../UI/FooterHeader/FooterHeader';

const contactFooterItem = (props) => {

    const HEADER = 'Contato';
    const PHONE = '(41) 99941-0384';
    const HOURS = '09:00 às 21:00 de segunda à sexta.';
    const ADDRESS = 'Av. Vicente Machado, 1939. Curitiba, Paraná - Brasil.';

    return (
        <div className={classes.ContactFooterItem}>
            <FooterHeader caller="risolia">{HEADER}</FooterHeader>
            <p><strong>Fone: </strong>{PHONE}</p>
            <p><strong>Horário de atendimento: </strong>{HOURS}</p>
            <p><strong>Endereco: </strong>{ADDRESS}</p>
        </div>
    )
};

export default contactFooterItem;
