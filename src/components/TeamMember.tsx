import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { profil1 } from '../assets'

import '../styles.css'

const RotatingProfile = () => {
  const borderColor = 'white'

  return (
    <div className="header-right flex flex-col relative h-full w-full right-[6rem] sm:right-0 mt-10 mb-10 sm:items-center">
      <div className="circle" style={{ borderColor: borderColor }}>
        <a className="icon absolute right-[9rem] top-[-1rem] bg-green-500">
          <FaFacebook />
        </a>
        <a className="icon absolute top-[19rem] right-[8.5rem] bg-green-500">
          <FaInstagram />
        </a>
        <a className="icon absolute right-[19rem] top-[8.5rem] bg-green-500">
          <FaLinkedin />
        </a>
        <a className="icon absolute right-[-1rem] top-[8.5rem] bg-green-500">
          <FaTwitter />
        </a>
      </div>
      <img
        className="image rounded-full top-[2rem] absolute h-[15rem] w-[15rem] overflow-hidden right-[32rem] sm:right-[10rem]"
        style={{ backgroundColor: borderColor }}
        src={profil1}
        alt="Profile"
      />
    </div>
  )
}

const TeamMember = () => {
  const downloadCV = () => {
    const link = document.createElement('a')
    link.href =
      'https://www.dropbox.com/scl/fi/y7y37uoeiepn7bh5aozn2/Forefront_Consulting_Group_AB_Richard_Gr-nroos_uppdaterad_cv.pdf?rlkey=jttwk07k57soen28c16t4r0v7&dl=0'
    link.download = 'Richard_Gronroos_CV.docx' // Specify the desired file name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="team-container flex mt-10 mx-10 flex-col sm:flex-row w-full">
      <div className="flex gap-2 justify-center flex-col">
        <h1 className=''>Meet our team</h1>
        <p>
          Richard is a passionate web and software developer with 5+ years in
          the industry
        </p>
        <button
          className="hidden mt-3 custom-blue-bg w-[150px] rounded-xl p-2 text-white"
          onClick={downloadCV}
        >
          Download CV
        </button>
      </div>
      <div className="flex sm:items-center w-[800px] flex-col sm:flex-row items-start">
        <RotatingProfile />
        <div className="flex flex-col w-[300px] relative right-[5rem] items-center sm:items-start">
          <h3 className="custom-blue-color font-bold text-2xl">
            Richard Grönroos
          </h3>
          <p className="text-gray-600 text-sm">Software Engineer</p>
          <p className=" text-sm">
            Richard is a talented developer who creates intuitive websites and
            software.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TeamMember
