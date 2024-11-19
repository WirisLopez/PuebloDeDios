import {Layout} from "@/components/Layout/Layout";
import {Divider, Heading, Text} from "@chakra-ui/react";
import Gallery from "@/components/Gallery";
import Map from "@/components/Map";

const Index = () => {
  return (
    <Layout title={"Nosotros"}>
      <Heading size="xl">Nosotros</Heading>
      <Divider borderColor="red" borderWidth="1px" mb={10}/>

      <Text>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Blandit eu ante class congue; 
        mus urna maecenas nibh. Alacinia maecenas imperdiet; morbi pulvinar est montes nisi. 
        Curabitur mi massa senectus sem odio fermentum. Suspendisse nec porta elit, 
        porta integer torquent hendrerit. Erat diam condimentum efficitur maximus placerat? 
        Mi congue vulputate quis, lectus sociosqu phasellus. Orci ornare dignissim fames finibus;
        nisl class netus.
      </Text>
      <Text mt={5} mb={10}>
        Eleifend odio donec tincidunt fermentum aptent consequat sapien commodo. 
        Ridiculus congue fusce eu vestibulum inceptos platea et malesuada. Penatibus enim eros rhoncus; 
        sed aptent interdum egestas. Morbi primis laoreet eleifend ante imperdiet felis 
        nunc eleifend quisque. Litora curabitur condimentum sit magnis montes id diam magnis. 
        Congue porttitor ut id elit dictum eros neque per. Imperdiet et purus imperdiet fringilla 
        nascetur eros.
      </Text>

      <Gallery/>

      <Map/>
    </Layout>
  )
}

export default Index