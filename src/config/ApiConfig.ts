import { IAuthor } from 'src/domains/search/interface/IAuthor';
import { IAppConfig } from './IAppConfig';
const getConfig = (): IAppConfig => {
    return require('./config.json') as IAppConfig;
}

const config = getConfig();

/**
 * Class that allows to obtain the configuration parameters of the app
 */
export abstract class ApiConfig {

    /**
     * get a config values
     * @return {IAppConfig}
     */
    static get config(): IAppConfig {
        return config;
    } 
    /**
     * Get a root path of proyect
     * @return {string}
     */
    static get rootPath(): string {
        return config.rootPath;
    }

    /**
     * get url of MELI
     * @return {string}
     */
    static get meli(): string {
        return config.meli.baseUrl;
    }

    /**
     * Get proyect name
     * @return {string}
     */
    static get proyectName(): string {
        return config.proyectName;
    }

    /**
     * get app port
     * @return {number}
     */
    static get appPort(): number {
        return config.appPort;
    }

     /**
     * get author
     * @return {IAuthor}
     */
      static get author(): IAuthor {
        return config.author;
    }
}