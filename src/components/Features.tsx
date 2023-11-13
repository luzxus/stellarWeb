import Button from './Button'
import './Features.css'
type RenderListProp = {
  boldText: string
  subText: string
  buttonText: string
  number: string
  isHeading?: boolean
  backgroundImage?: string
}
const text = 'Engage with Paradise Development for expert consulting services.'
const subtitle = 'Our Step By Step Process'
// CSS classes
const containerClass = 'layout p-5 pb-10 m-0 w-full'
const headingClass =
  'heading text-black font-medium sm:text-4xl text-3xl w-full sm:w-[50%]'
const rowClass = ''

const listItemClass =
  'list-item-class flex flex-col gap-3 w-full sm:w-[33.33%] border-solid  border-2  rounded-md p-10'
const listItemNumberClass = 'div font-bold'

const mobileClass = ''

// JSX component
const Features = () => {
  return (
    <div className={`${containerClass} rounded-md`}>
      <div className="flex flex-col sm:flex-row items-center text-center sm:items-start sm:text-start justify-evenly ">
        <p className={headingClass}>{text}</p>
        <p className="font-light flex items-end text-2xl sm:text-3xl mt-3 sm:mt-0">
          {subtitle}
        </p>
      </div>
      <div
        className={`row flex mt-5 sm:mt-10 mx-5 sm:space-x-5 flex-col sm:flex-row drop-shadow-md`}
      >
        {renderListItem({
          boldText:
            'Our process begins with understanding your business goals and challenges.',
          buttonText: 'Learn more',
          subText:
            'It is at this stage that we gather as much information from you as possible.',
          number: '1',
        })}
        {renderListItem({
          boldText:
            'We propose our solution and begin developing what we have agreed on.',
          buttonText: 'Learn more',
          subText:
            'Our team of experts develop the solution after gaining your approval. We collaborate closely with you throughout the development lifecycle.',
          number: '2',
        })}
        {renderListItem({
          boldText:
            "Unlock your business's potential with our tailored solutions.",
          buttonText: 'Learn more',
          number: '3',
          subText:
            'It is time for the launch. We implement the solution to drive your business growth. Mission complete!',
          isHeading: true,
        })}
      </div>
    </div>
  )
}

// Function to render list items
const renderListItem = ({
  boldText,
  buttonText,
  isHeading,
  number,
  subText,
}: RenderListProp) => (
  <div
    id="how-it-works"
    className={`${listItemClass} ${mobileClass} `}
    /*  style={{
      borderColor: '#6DC2D5',
    }} */
  >
    {isHeading ? (
      <p className={`${listItemNumberClass} heading-2 font-bold`}>{number}</p>
    ) : (
      <p className={listItemNumberClass}>{number}</p>
    )}
    {isHeading ? (
      <p className="heading-2 font-bold">{boldText}</p>
    ) : (
      <p className={boldText.includes('\n') ? 'p font-bold' : 'div font-bold'}>
        {boldText}
      </p>
    )}
    <p className="text">{subText ? subText : null}</p>
    <div className="action">
      <Button
        className="style-link-small w-32"
        variant="link"
        text={buttonText}
      />
    </div>
  </div>
)

export default Features
