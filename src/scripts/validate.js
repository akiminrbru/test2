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
    } else {
        document.getElementById("surnamef").innerHTML="";
    }

    if (name.length == 0) {
        document.getElementById("namef").innerHTML="*Укажите имя";
        window.scroll(0, 0);
        e.preventDefault();
    } else {
        document.getElementById("namef").innerHTML="";
    }

    if (number.length == 0) {
        document.getElementById("numberf").innerHTML="*Укажите номер телефона";
        window.scroll(0, 0);
        e.preventDefault();
    } else {
        document.getElementById("numberf").innerHTML="";
    }

    if (city.length == 0) {
        document.getElementById("cityf").innerHTML="*Укажите город";
        e.preventDefault();
    } else {
        document.getElementById("cityf").innerHTML="";
    }

    if (date.length == 0) {
        document.getElementById("datef").innerHTML="*Укажите дату выдачи";
        e.preventDefault();
    } else {
        document.getElementById("datef").innerHTML="";
    }

    if (group == "*Группа клиентов") {
        document.getElementById("groupf").innerHTML="*Укажите группу клиентов";
        e.preventDefault();
    } else {
        document.getElementById("groupf").innerHTML="";
    }

    if (type == "*Тип документа") {
        document.getElementById("typef").innerHTML="*Укажите тип документа";
        e.preventDefault();
    } else {
        document.getElementById("typef").innerHTML="";
    }
    
    if (born.length == 0) {
        document.getElementById("bornf").innerHTML="*Укажите дату рождения ";
        e.preventDefault();
    } else {
        document.getElementById("bornf").innerHTML="";
    }
    
    if (sex.length == 0) {
        document.getElementById("sexf").innerHTML="*Укажите пол";
        e.preventDefault();
    } else {
        document.getElementById("sexf").innerHTML="";
    }

    return true;
}

export default validate;