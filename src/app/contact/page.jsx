import React from 'react'
import ContactForm from '../components/contactPageComponents/ContactForm'
import HaveQuestion from '../components/contactPageComponents/HaveQuestion'
import NeedHelp from '../components/contactPageComponents/NeedHelp'

const ContactPage = () => {
  return (
    <div className='bg-[#E7EAF3] max-w-[1440px] mx-auto'>
      <ContactForm/>
      <HaveQuestion/>
      <NeedHelp/>
      
    </div>
  )
}

export default ContactPage
