import React from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import Info from './Info';
import Input from './Input';
import Input2 from './Input2';
import Select from './Select';
import Title from './Title';

function validate(e) {
    let surname = document.getElementById('surname').value;
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let city = document.getElementById('city').value;
    let date = document.getElementById('date').value;
    let group = document.getElementById('group').value;
    let type = document.getElementById('type').value;
    let born = document.getElementById('born').value;
    let sex = document.getElementById('sex').value;

    if (surname.length == 0) {
        document.getElementById("surnamef").innerHTML="*Укажите фамилию";
        window.scroll(0, 0);
        e.preventDefault();
    }

    if (name.length == 0) {
        document.getElementById("namef").innerHTML="*Укажите имя";
        window.scroll(0, 0);
        e.preventDefault();
    }

    if (number.length == 0) {
        document.getElementById("numberf").innerHTML="*Укажите номер телефона";
        window.scroll(0, 0);
        e.preventDefault();
    }

    if (city.length == 0) {
        document.getElementById("cityf").innerHTML="*Укажите город";
        e.preventDefault();
    }

    if (date.length == 0) {
        document.getElementById("datef").innerHTML="*Укажите дату выдачи";
        e.preventDefault();
    }

    if (group == "*Группа клиентов") {
        document.getElementById("groupf").innerHTML="*Укажите группу клиентов";
        e.preventDefault();
    }

    if (type == "*Тип документа") {
        document.getElementById("typef").innerHTML="*Укажите тип документа";
        e.preventDefault();
    }
    
    if (born.length == 0) {
        document.getElementById("bornf").innerHTML="*Укажите дату рождения ";
        e.preventDefault();
    }

    if (sex.length == 0) {
        document.getElementById("sexf").innerHTML="*Укажите пол";
        e.preventDefault();
    }
}

function Main() {
    return(
        <div>
            <form name="validate_from" onSubmit="return validate()">
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
                <Button validate={validate}/>
            </form>
        </div>
    )
}

export default Main;