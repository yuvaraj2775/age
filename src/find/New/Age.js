import React, { useState } from 'react';
import './Age.css';

const Age = () => {
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [age, setAge] = useState('0');
    const [months, setMonths] = useState('0');
    const [days, setDays] = useState('0');

    const calculate = () => {
        const day = Number(date)
        const months = Number(month) - 1; 
        const years = Number(year);

        const inputDate = new Date(years, months, day);
        const currentDate = new Date();

        let age = currentDate.getFullYear() - inputDate.getFullYear();
        let monthDiff = currentDate.getMonth() - inputDate.getMonth();
        let dayDiff = currentDate.getDate() - inputDate.getDate();

    

        setAge(age);
        setMonths(monthDiff);
        setDays(dayDiff);
    };

    return (
        <div>
            <div className='  h-96	w-3/5	ml-60 mt-44 border 	'>
                <div className="  flex	justify-around mt-8 ml-4	">
                    
                    <div className="" >
                    <label htmlFor="date" id="newdate" className='block' >Day</label>
                        <input type="number" name="date" className='border-2  to-black	' value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>

                  
                    <div className="">
                    <label htmlFor="month" className='block'>Month</label>
                        <input type="number" name="month"  className='border-2  to-black	' value={months}  onChange={(e) => setMonth(e.target.value)}/>
                    </div>

                    
                    <div className="box">
                    <label htmlFor="year" className='block'>Year</label>
                        <input type="number" name="year" className='border-2  to-black	' value={year} onChange={(e) => setYear(e.target.value)} />
                    </div>
                </div >

                <button onClick={calculate} className='	mt-12	ml-72	h-12 w-20	rounded		bg-sky-500		'>Submit</button><br/><br />
                <div className='ml-12'>
                <p id="new">Age: {age} years</p>
                <p id="newmonth">Months: {months}</p>
                <p id="curdate">Days: {days}</p>
                </div>
            </div>
        </div>
    );
};

export default Age;
