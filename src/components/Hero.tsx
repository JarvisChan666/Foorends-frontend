import hero from "../assets/hero.png"

const Hero = () => {
 return (
    <div>
        {/* object-cover keep the aspect w-h ratio of picture */}
        <img src={hero} className="w-full max-h-[600px] object-cover"/>
    </div>
 )
}

export default Hero;