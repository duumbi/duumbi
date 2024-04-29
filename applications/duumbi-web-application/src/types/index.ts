import { IconType } from "react-icons";

export interface ToolbarItem {
    key?: string;
    title: string;
    icon: IconType;
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

