import { astronaut_3_profile_, earth, planet_2, planet_3 } from '../assets'

const Service = () => {
  return (
    <div id="services" className="flex mx-10 my-10 gap-5 items-start relative">
      <div id="container" className="flex flex-col flex-wrap w-[50%]">
        <h2 className="mx-2 ">
          Revolutionizing Small Business Consulting with Unique Approach
        </h2>
        <p className="mx-2 text-base mt-5 w-auto h-[200px] sm:h-full">
          At StellarWeb Solutions, we take a fresh and innovative approach to
          small business consulting. Our team of experts combines software and
          web development expertise to provide tailored solutions that drive
          growth and success.
        </p>
        <div id="list" className="flex flex-col gap-2 mt-5">
          <ul>
            <li className="flex items-baseline">
              <img className="small-icon" src={earth} />
              <p className="text-base mt-4 ml-1">
                Increase Efficiency and Maximize Potential with StellarWeb Solutions
                Development
              </p>
            </li>
            <li className="flex items-baseline">
              <img className="small-icon" src={planet_2} />
              <p className="text-base mt-4 ml-1">
                Unlock Your Business's Full Potential with Our Expertise
              </p>
            </li>
            <li className="flex items-baseline">
              <img className="small-icon" src={planet_3} />
              <p className="text-base mt-4 ml-1">
                Transform Your Business with StellarWeb Solutions's Cutting-Edge
                Solutions
              </p>
            </li>
          </ul>
          <div className="flex-auto  place-self-end sm:place-self-start flex  sm:hidden mt-5">
            <img
              src={astronaut_3_profile_}
              width="616px"
              height="640px"
              className="object-cover"
              style={{
                filter: 'drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5))',
              }}
              alt="Astronaut Profile"
            />
          </div>
        </div>
      </div>
      <div className="flex-auto  place-self-end sm:place-self-start hidden sm:flex">
        <img
          src={astronaut_3_profile_}
          width="616px"
          height="640px"
          className="object-cover"
          style={{ filter: 'drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5))' }}
          alt="Astronaut Profile"
        />
      </div>
    </div>
  )
}

export default Service
