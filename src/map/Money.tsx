import React, {useState} from 'react';
import MoneyBody from "./MoneyBody";

export type FilterType = 'all' | 'Dollars' | 'RUBLS';

export type MoneyPropsType = {
    money: BanknotePropsType[]
}

export type BanknotePropsType = {
    banknotes: string;
    value: number;
    number: string;
}

export const Money = (props: MoneyPropsType) => {

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = props.money;

    if (filter === 'Dollars') {
        currentMoney = props.money.filter(filteredMoney => filteredMoney.banknotes === 'Dollars');
    }
    if (filter === 'RUBLS') {
        currentMoney = props.money.filter(filteredMoney => filteredMoney.banknotes === 'RUBLS');
    }
    const buttonFiltered = (nameButton: FilterType)=>{
        setFilter(nameButton)
    }

    return (

            <MoneyBody buttonFiltered = {buttonFiltered}
                       currentMoney = {currentMoney}/>

    );
};

