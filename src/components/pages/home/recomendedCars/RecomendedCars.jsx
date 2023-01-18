import React, { useMemo, useState } from 'react'
import RadioButtons from '../../../radioButton/RadioButtons'
import { Link } from 'react-router-dom'
import { useCommonContext } from '../../../../AppContext/AppContext'
import filterData from '../../../../functions/filterData'
import Cards from '../../../cards/Cards'


const RecomendedCars = () => {

    const { allCars } = useCommonContext()

    const [recomendedState, setRecomendState] = useState('New')

    const goTo = () => {
        switch(recomendedState){
            case 'New': return 'new_cars'
            case 'Used': return 'used_cars'
        }
    }

    const find = recomendedState==='New' ? [true] : [false]
    const recomendedCars = filterData(allCars, {isNew: find })


  return (
    <section className='recomend'>
    <h2>Recommended Cars</h2>
    <div className='recomend__control'>
        <RadioButtons labelList={['New', 'Used']} individualClass='underline' asButton radioCallBack={(data)=>setRecomendState(data)} activeName={recomendedState}/>
        <Link className='submenu'  to={goTo()}>See more</Link>
    </div>
    <div className='cars__container'>
        <Cards showBy={3}  cars={[recomendedCars[0], recomendedCars[1], recomendedCars[2],]} />        
    </div>
</section>
  )
}

export default RecomendedCars