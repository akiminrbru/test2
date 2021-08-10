import React from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import Info from './Info';
import Input from './Input';
import Input2 from './Input2';
import Select from './Select';
import Title from './Title';

function Main() {
    return(
        <div>
            <Title/>
            <Input pholder="*Фамилия"/>
            <Input pholder="*Имя"/>
            <Input pholder="Отчество"/>
            <Input2 pholder1="*Дата рождения" pholder2="*Пол"/>
            <Input pholder="*Номер телефона"/>
            <Select pholder="*Группа клиентов"
                    pholder1="VIP"
                    pholder2="OMC"
                    pholder3="Проблемные"/>
            <Select pholder="Лечащий врач"
                    pholder1="Иванов"
                    pholder2="Захаров"
                    pholder3="Чернышева"/>   
            <Checkbox/>     
            <Info info="Адрес:"/>
            <Input pholder="Страна"/>
            <Input pholder="Область"/>
            <Input pholder="*Город"/>
            <Input2 pholder1="Улица" pholder2="Дом"/>
            <Input pholder="Индекс"/>
            <Info info="Данные:"/>
            <Select pholder="*Тип документа"
                    pholder1="Паспорт"
                    pholder2="Свидетельство о рождении"
                    pholder3="Водительское удостоверение"/>
            <Input2 pholder1="Серия" pholder2="Номер"/>
            <Input pholder="Кем выдан"/>
            <Input pholder="*Дата выдачи"/>
            <Button/>
        </div>
    )
}

export default Main;