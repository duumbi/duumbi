import { RegionCode } from "../constants/enums";

export interface ToolbarItem {
    key?: string;
    title: string;
    icon: JSX.Element;
}

export interface CoreProperties {
    key: string;
    name: string;
}

export interface Database extends CoreProperties {
}

export interface Collection extends CoreProperties {
}

export interface Environment extends CoreProperties {
}

export interface CurrentState<T> extends CoreProperties {
    items: T[];
}

export interface ApplicationInterface {
    region: RegionCode;
    database: Database;
    collection: Collection;
    environment: Environment;
}

export type ApplicationContextType = {
    application: ApplicationInterface;
    setRegion: (region: RegionCode) => void;
    setDatabase: (database: Database) => void;
    setCollection: (collection: Collection) => void;
    setEnvironment: (environment: Environment) => void;
};