import Button from './Button'
import './Header.css'
import Navbar from './Navbar'

const Header = () => {
  const handleContactClick = () => {
    const emailAddress = 'richard.gronroos94@hotmail.com' // Replace with your actual email address
    const subject = 'Förfrågan'
    const body =
      'Jag är intresserad av era tjänster och skulle vilja boka ett möte för att gå igenom planen tillsammans.'

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }

  const buttonText = 'Learn More'
  const buttonText1 = 'Book meeting'
  const text =
    'Empowering small businesses through software and web development'
  const text1 =
    'Paradise Development is dedicated to helping small businesses thrive by providing top-notch software and web development solutions. Our mission is to empower entrepreneurs with the tools they need to succeed in today&#39;s digital world.'

  return (
    <div className={`header`}>
      <Navbar />

      <div className="content text-white flex items-center justify-center flex-col h-full">
        <div className="label">
          <p className="medium-length-hero">{text}</p>
        </div>
        <div className="label">
          <p className="lorem-ipsum-dolor">{text1}</p>
        </div>
        <div className="actions flex mt-10 gap-4">
          <Button
            variant="primary"
            text={buttonText1}
            onClick={handleContactClick}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
