import React from 'react';

type TopCarsPropsType = {
    topCars: TopCarType[]
}

type TopCarType = {
    manufacturer: string;
    model: string;
}

export const TopCars = (props: TopCarsPropsType) => {
    return (
        <table>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>

            {props.topCars.map((car, index) => {
                return (
                    <tr key={index}>
                        <td>
                            {car.manufacturer}
                        </td>
                        <td>
                            {car.model}
                        </td>
                    </tr>
                )
            })}
        </table>
    );
};

