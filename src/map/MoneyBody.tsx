import React from 'react';
import {Button} from "../components/Button";
import {BanknotePropsType, FilterType} from "./Money";


type MoneyBodyType = {
    buttonFiltered: (nameButton: FilterType)=>void;
    currentMoney:  BanknotePropsType[];

   }

const MoneyBody = (props: MoneyBodyType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknotes}   </span>
                            <span>{objFromMoneyArr.value}   </span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <Button name={'All'}
                        callback={() => props.buttonFiltered('all')}/>
                <Button name={'Dollars'}
                        callback={() => props.buttonFiltered('Dollars')}/>
                <Button name={'Rubles'}
                        callback={() => props.buttonFiltered('RUBLS')}/>
            </div>
        </div>
    );
};

export default MoneyBody;