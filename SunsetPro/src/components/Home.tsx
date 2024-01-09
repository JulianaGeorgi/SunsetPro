import { Footer } from "./Footer";
import { ImageGallery } from "./ImageGallery";
import { HeroSection } from "./HeroSection";
import { Map } from "./Map";

export const Home = () => {
    return (
        <>
            <HeroSection />
            <Map />
            <ImageGallery/>
            <Footer />
        </>
    )
}