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
    <div className={`flex ${direction} justify-center gap-3 bg-[var(--secondary-blue)] p-4 rounded-lg text-white mt-4 mb-10`}>
        <div className="flex gap-2 items-center justify-center" >
            <h2 className=''>رژیم فعلی شما:</h2>
            <p className='justify-items-center '>  رژیم مدیترانه‌ای</p>
        </div>
        <div className='flex gap-2 items-center justify-center '>
        <Tick />
        <p> وضعیت رژیم:</p> 
            {lastMediterraneanForm?.isChecked?<p className='font-bold'>ویزیت شده</p>:<p className='font-bold'>ویزیت نشده</p>}
        </div>
    </div>
  )
}

export default DietStatus