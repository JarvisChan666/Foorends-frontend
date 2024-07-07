import landingImage from "../assets/landing.webp"
import appDownloadImage from "../assets/appDownload.webp"

const HomePage = () => {
 return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Tuck into a takeway today
            </h1>
            <span className="text-xl">Food is just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} className="w-full h-auto max-h-[600px]" width={1600} height={900} alt="Landing"/>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter ">
                    Order takeaway even faster!
                </span>
                <span>
                    Download the App for faster ordering
                </span>
                <img src={appDownloadImage} width={271} height={47} alt="App Download"/>
            </div>
        </div>
    </div>
 )
}

export default HomePage;