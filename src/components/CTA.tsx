import React from 'react'
import Button from './Button'
import './CTA.css'

const CTA = () => {
  const text =
    'Schedule a consultation or contact us for more information on how we can help your business grow.'

  const handleContactClick = () => {
    const emailAddress = 'richard.gronroos94@hotmail.com' // Replace with your actual email address
    const subject = 'Förfrågan'
    const body = 'Jag är intresserad av era tjänster och skulle vilja boka ett möte för att gå igenom planen tillsammans.'

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }

  return (
    <div className="CTA-container w-full h-[500px] flex flex-col gap-10 text-center justify-center items-center">
      <h2>Unlock Your Business Potential Today</h2>
      <div className="text">{text}</div>
      <div className="buttons flex w-[300px] justify-center">
        <Button text="Contact" variant="primary" onClick={handleContactClick} />
      </div>
    </div>
  )
}

export default CTA
