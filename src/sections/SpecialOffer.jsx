
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
   <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
    <div className="flex-1">
      <img src={offer} alt="" 
      height={687}
      width={773}
      className="object-contain w-full"/>
    </div>
    <div className="flex flex-1 flex-col">
    <h2 className="mt-20 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
      <span className="text-coral-red inline-block mt-3">Super</span> Offer
    </h2>
    <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance</p>
    <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fufill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional. </p>
    <div className="mt-11 flex flex-wrap gap-4"><Button label="Shop now" iconURL={arrowRight} />
    <Button label="Learn more"
    backgroundColor="bg-white"
    borderColor="border-slate-gray"
    textColor="text-slate-gray"/></div>
      </div>
   </section>
  )
}

export default SpecialOffer