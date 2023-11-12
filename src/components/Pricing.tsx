import Button from './Button'
import './Pricing.css'
const Pricing = () => {
  return (
    <div className="pricing-container  bg-slate-400 mt-20 text-white ">
      <div className="text flex flex-col gap-5 justify-center items-center p-10 mx-10">
        <h1>Pricing Plans</h1>
        <h5>Choose the right plan for your business needs</h5>
      </div>
      <div className="plans-container flex gap-5 justify-center w-full">
        <div className="basic-plan z-10 w-[50%] m-10 h-[350px] flex flex-col border-solid border-2 border-black p-[10px]">
          <h5 className="text-center">Basic Plan</h5>
          <h1 className="text-center">1000kr</h1>

          <div className="features h-full flex items-center justify-center">
            <ul className="h-[85%]">
              <li>Customizable templates</li>
              <li>24/7 support</li>
              <li>1 page</li>
            </ul>
          </div>
          <div className="w-[80%] self-center">
            <Button variant="read" text="Read more" />
          </div>
        </div>
        <div className="advanced-plan z-10 w-[50%] m-10 h-[350px] flex flex-col border-solid border-2 border-black p-[10px]">
          <h5 className="text-center">Advanced Plan</h5>
          <h1 className="text-center">2000-3000kr</h1>

          <div className="features h-full flex items-center justify-center">
            <ul className="h-[85%]">
              <li>Customizable templates</li>
              <li>24/7 support</li>
              <li>1-5 pages</li>
              <li>CMS support</li>
            </ul>
          </div>
          <div className="w-[80%] self-center">
            <Button variant="read" text="Read more" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
