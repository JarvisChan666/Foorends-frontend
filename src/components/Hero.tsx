import hero from "../assets/hero.webp";

const Hero = () => {
  return (
    <div>
      {/* object-cover keep the aspect w-h ratio of picture */}
      <img
        src={hero}
        alt="Hero"
        className=" w-full max-h-[600px] object-cover width={5000}
        height={2813}"
      />
    </div>
  );
};

export default Hero;
