import useFetchOneMediterranean from '@/hooks/useFetchOneMediterranean';
import { LoginDataType } from '@/types';
import React, { useMemo } from 'react'
import Tick from '/public/svg/adminPanelSvgs/check_ring_round.svg'

function DietStatus({phoneNumber} : LoginDataType) {
    
    const theMedi = useFetchOneMediterranean(phoneNumber)

    const lastMediterraneanForm = useMemo(() => {
        return theMedi[theMedi.length - 1];
      }, [theMedi]);
    
  return (
    <div className='flex flex-col gap-3 bg-[var(--secondary-blue)] p-4 rounded-lg text-white'>
        <div className='flex gap-2 items-center justify-center'>
            <h2 className='text-lg'>رژیم فعلی شما:</h2>
            <p className='justify-items-center text-lg'>  رژیم مدیترانه‌ای</p>
        </div>
        <div className='flex gap-2 items-center justify-center text-lg'>
        <Tick />
            <p> وضعیت رژیم:</p> 
            {lastMediterraneanForm?.isChecked?<p>ویزیت شده</p>:<p>ویزیت نشده</p>}
        </div>
    </div>
  )
}

export default DietStatus