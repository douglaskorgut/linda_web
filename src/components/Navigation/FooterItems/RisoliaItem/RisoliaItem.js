import React from "react";
import classes from './RisoliaItem.module.css';
import FooterHeader from '../../../UI/FooterHeader/FooterHeader';

const risoliaItem = (props) => {

    const HEADER = 'Isabelle Risolia';
    const CRP = 'CRP-08/28906';
    const POS = "Análise do comportamento";
    const DEEP = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    return (
        <div className={classes.RisoliaItem}>
            <FooterHeader caller="risolia">{HEADER}</FooterHeader>
            <p><strong>Psicóloga: </strong>{CRP}</p>
            <p><strong>Pós-Graduação: </strong>{POS}</p>
            <p><i>{DEEP}</i></p>
        </div>
    )
};

export default risoliaItem;
