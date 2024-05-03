import { InformationLayout } from "../layouts";
import ApplicationContextProvider from "../context/application-context";
import { RegionSelector } from "../components/information";

const Region = () => {

  return (

    <ApplicationContextProvider>
      <InformationLayout>
        <RegionSelector />
      </InformationLayout>
    </ApplicationContextProvider>
  );
};

export default Region;
