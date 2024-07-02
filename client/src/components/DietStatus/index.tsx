import useFetchOneMediterranean from '@/hooks/useFetchOneMediterranean';
import { DietStatusType } from '@/types';
import React, { useMemo } from 'react'
import Tick from '/public/svg/adminPanelSvgs/check_ring_round.svg'

function DietStatus({phoneNumber, direction} : DietStatusType) {
    
    const theMedi = useFetchOneMediterranean(phoneNumber)

    const lastMediterraneanForm = useMemo(() => {
        return theMedi[theMedi.length - 1];
      }, [theMedi]);
    
  return (
    <div className={`flex xl:!flex-col !flex-row ${direction} justify-evenly xl:justify-center gap-3 bg-[var(--secondary-blue)] p-4 rounded-lg text-white`}>
        <div className="flex gap-1 items-center justify-around" >
            <h2 className='font-bold text-sm xl:text-base'>رژیم فعلی شما:</h2>
            <p className='justify-items-center '>مدیترانه‌ای</p>
        </div>
        <div className='flex gap-1 items-center justify-around '>
        <p className='font-bold text-sm xl:text-base'> وضعیت رژیم:</p> 
            {lastMediterraneanForm?.isChecked?<p className=''>ویزیت شده</p>:<p className=''>ویزیت نشده</p>}
        </div>
    </div>
  )
}

export default DietStatus