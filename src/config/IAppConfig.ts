import { IAuthor } from 'src/domains/search/interface/IAuthor';

export interface IAppConfig {
    proyectName: string;
    rootPath: string;
    appPort: number;
    meli: {
        baseUrl: string;
    };
    author: IAuthor;
}
