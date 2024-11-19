import {Layout} from "@/components/Layout/Layout";
import {keyframes} from "@chakra-ui/react";
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

  const animationButton = keyframes`
    0% {
      background-position: 0 50%;
      scale: 1;
    }
    25% {
      scale: 1.1;
    }
    50% {
      background-position: 100% 50%;
      scale: 1;
    }
    75% {
      scale: 1.1;
    }
    100% {
      background-position: 0 50%;
      scale: 1;
    }
  `;

  return (
    <Layout title={"Iglesia Cristiana Bautista de Pachuca"}>
      <InformationIndex/>
      <Map/>
    </Layout>
  );
}

export default Index;