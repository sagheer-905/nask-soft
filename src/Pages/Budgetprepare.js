import React from 'react'
import BudgetprepareBanner from '../Component/Budgetprepare/BudgetprepareBanner/BudgetprepareBanner'
import Financialstatment from '../Component/Budgetprepare/Financialstatment/Financialstatment'
import Preparationsetps from '../Component/Budgetprepare/Preparationsetps/Preparationsetps'
import SectiionTwo from '../Component/Budgetprepare/SectionTow/SectiionTwo'
import StepsSection from '../Component/Budgetprepare/StepsSection/StepsSection'
import Footer from '../Component/Home/Footer/Footer'

function Budgetprepare() {
  return (
    <div>
      <BudgetprepareBanner/>
      <SectiionTwo/>
      <Preparationsetps/>
      <StepsSection/>
      <Financialstatment/>
      <Footer/>
    </div>
  )
}

export default Budgetprepare
