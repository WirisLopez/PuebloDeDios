import {Layout} from "@/components/Layout/Layout";
import {useRouter} from "next/router";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import ReactPlayer from "react-player";
import { useEffect, useRef } from "react";
import { InformationIndex } from "@/components/Layout/InformationIndex";
import Map from "@/components/Map";

const Index = () => {
  const playerRef = useRef<ReactPlayer | null>(null);
  useEffect(() => {
    const videoElement = playerRef.current?.getInternalPlayer(); // Usa el operador de encadenamiento opcional
    if (videoElement) {
      videoElement.setAttribute('controlsList', 'nodownload');
    }
  }, []);
  const router = useRouter();

  return (
    <Layout title={"Iglesia Cristiana Bautista Pueblo de Dios"}>
      <InformationIndex/>
      <Map/>
    </Layout>
  );
}

export default Index;
