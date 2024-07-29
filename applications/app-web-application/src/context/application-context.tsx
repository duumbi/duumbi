import { createContext, useEffect, useState } from "react";
import {
  ApplicationContextType,
  ApplicationInterface,
  Collection,
  Database,
  Environment,
} from "../types";
import { RegionCode } from "../constants/enums";

export const ApplicationContext = createContext<ApplicationContextType>(
  {} as ApplicationContextType
);

export default function ApplicationContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const appitem: ApplicationInterface = JSON.parse(
    localStorage.getItem("application") || "[]"
  );

  const [application, setApplication] = useState<ApplicationInterface>({
    region: appitem.region,
    database: appitem.database,
    collection: appitem.collection,
    environment: appitem.environment,
  });

  useEffect(() => {
    localStorage.setItem("application", JSON.stringify(application));
  }, [application]);

  const setRegion = (region: RegionCode) => {
    setApplication({
      ...application,
      region: region,
    });
  };

  const setDatabase = (database: Database) => {
    setApplication({
      ...application,
      database: database,
    });
  };

  const setCollection = (collection: Collection) => {
    setApplication({
      ...application,
      collection: collection,
    });
  };

  const setEnvironment = (environment: Environment) => {
    setApplication({
      ...application,
      environment: environment,
    });
  };

  return (
    <ApplicationContext.Provider
      value={{
        application,
        setRegion,
        setDatabase,
        setCollection,
        setEnvironment,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}
