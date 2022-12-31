import {createContext} from '@lit-labs/context';

export interface DataSource {
    version: string;
    items: string[];
}

export const dataSourceContext = createContext<DataSource>('dataSource');