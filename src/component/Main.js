import React from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import Info from './Info';
import Input from './Input';
import Input2 from './Input2';
import Select from './Select';
import Title from './Title';
import validate from '../scripts/validate';

function create() {
    if(validate == true) {
        alert("усп");
    }
}

function Main() {
    return(
        <div>
            <form name="validate_from" onSubmit={validate}>
                <Title/>
                <Input id1={"surname"} id2={"surnamef"} pholder="*Фамилия"/>
                <Input id1={"name"} id2={"namef"} pholder="*Имя"/>
                <Input pholder="Отчество"/>
                <Input2 id1={"born"} id2={"sex"} id3={"bornf"} id4={"sexf"} pholder1="*Дата рождения" pholder2="*Пол"/>
                <Input id1={"number"} id2={"numberf"} pholder="*Номер телефона"/>
                <Select id1={"group"} id2={"groupf"}
                        pholder="*Группа клиентов"
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
                <Input id1={"city"} id2={"cityf"} pholder="*Город"/>
                <Input2 pholder1="Улица" pholder2="Дом"/>
                <Input pholder="Индекс"/>
                <Info info="Данные:"/>
                <Select id1={"type"} id2={"typef"}
                        pholder="*Тип документа"
                        pholder1="Паспорт"
                        pholder2="Свидетельство о рождении"
                        pholder3="Водительское удостоверение"/>
                <Input2 pholder1="Серия" pholder2="Номер"/>
                <Input pholder="Кем выдан"/>
                <Input id1={"date"} id2={"datef"} pholder="*Дата выдачи"/>
                <Button create={create}/>
            </form>
        </div>
    )
}

export default Main;