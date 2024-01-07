import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./map/NewComponent";
import {TopCars} from "./map/TopCars";
import {Button} from "./components/Button";
import {Money} from "./map/Money";

function App() {

    const [students, setStudents] = useState([
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
        ]
    )
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]


    const button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const button3Foo = (message: string) => {
        console.log(message)
    }

    let [a, setA] = useState(1)

    const onClickHandler1 = () => {
        setA(++a);
        console.log(a);
    }
    const onClickHandler2 = () => {
        setA(a - a);
        console.log(a);
    }

    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    return (
        <>

            <h1>{a}</h1>
            <button onClick={onClickHandler1}>number</button>
            <button onClick={onClickHandler2}>0</button>


            <Money  money={money}/>
            <Button name={'YouTubeChannel-1'}
                    callback={() => button1Foo('I am Alex', 36, 'Meleuz')}/>
            <Button name={'YouTubeChannel-2'}
                    callback={() => button2Foo('I am Alex')}/>
            <Button name={'Stupid button'}
                    callback={() => button3Foo('I am stupid BUTTON!')}/>
            <TopCars topCars={topCars}/>
            <NewComponent students={students}/>
            <Header titleForHeader={'New Header'}/>
            <Body titleForBody={'New Body'}/>
            <Footer titleForFooter={'New Footer'}/>
        </>
    );
}

export default App;
