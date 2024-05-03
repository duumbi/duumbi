import { Card } from "antd";
import { ApplicationLayout } from "../layouts";
import ApplicationContextProvider from "../context/application-context";

const Application = () => {
  return (
    <ApplicationContextProvider>
      <ApplicationLayout>
        <Card title="Application" style={{ width: "60%" }} />
      </ApplicationLayout>
    </ApplicationContextProvider>
  );
};

export default Application;
