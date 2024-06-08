import React from "react";
import momentJalaali from "moment-jalaali";
import CalenderIcon from '/public/svg/adminPanelSvgs/calendar.svg'

momentJalaali.loadPersian({ usePersianDigits: true });

const Calendar: React.FC = () => {
    return (
        <div className="flex gap-2 justify-center items-center">
            <CalenderIcon />
            <p className="text-base pt-1">{momentJalaali().format('jYYYY/jM/jD, dddd')}</p>
        </div>
    );
};

export default Calendar;
