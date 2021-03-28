import React from 'react'
import Image from './CoatofArms.png'

const History = (props) => {
    const {setView = Function.prototype} = props

    return <div>
        
        <h3 align="center"><img src={Image} alt='Герб ТиНАО' width='100px' align='left' />ИСТОРИЯ МЕШКОВО</h3>
    <p className="content"><strong>  Деревня Мешково располагается на землях, которыми владел род
    Окатия, одного из сподвижников Ивана Калиты. Своё название деревня получила от одного из потомков Окатия, писца
    Григория Мешка Валуева, который упоминается в документах 1519 году. Деревня упоминается в переписных книгах 1627
    года как «Мешково, Нехольцево тож» (с добавлением фамилии одного из более поздних владельцев). В 1701 году в деревне
    была построена церковь во имя Тихвинской иконы Божией Матери, после чего деревня стала именоваться как «Богородское,
    Мешково тож». Начиная с переписи 1926 году упоминается только как Мешково.

    По писцовым книгам 1627 года деревня значилась за дьяконом Григорием Бредихиным, до которого принадлежала Григорию и
    Осипу Бабаниным и относилась к Сетунскому стану Московского уезда. По переписным книгам 1646 года находилась во
    владении Мартемьяна Бредихина, в 1678 году — его сына Фёдора, в 1688—1741 гг. — внука, Семёна Фёдоровича Бредихина,
    который и построил в деревне деревянную Богородицкую церковь.

    В «Списке населённых мест» 1862 года Богородское (Мешково) — владельческое сельцо 1-го стана Подольского уезда
    Московской губернии по правую сторону старокалужского тракта, в 19 верстах от уездного города и 36 верстах от
    становой квартиры, при пруде и колодцах, с 7 дворами и 48 жителями (24 мужчины, 24 женщины).

    По данным на 1899 год — деревня Десенской волости Подольского уезда с 33 жителями.

    В 1913 году — 6 дворов, имение Н. С. Козновой.

    По материалам Всесоюзной переписи населения 1926 года — деревня Барановского сельсовета Десенской волости
    Подольского уезда в 8,5 км от Калужского шоссе и 9,6 км от станции Кокошкинская Киево-Воронежской железной дороги,
    проживало 32 жителя (13 мужчин, 19 женщин), насчитывалось 6 крестьянских хозяйств.

    С 1929 до 2012 гг. — населённый пункт Московской области в составе Красно-Пахорского района (1929—1946);
    Калининского района (1946—1957); Ленинского района (1957—1960, 1965—2012); Ульяновского района (1960—1963);
    Ленинского укрупнённого сельского района (1963—1965).

    С 2012 года — в составе города Москвы.
    К слову, название деревни Мешково произошло от Григория Михайловича Валуева по прозвищу Мешок.</strong></p>

    <button className="btn waves-effect waves-light" onClick={() => setView('main')}>На главную страницу</button>
    </div>
}

export {History}
