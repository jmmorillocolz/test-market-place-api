import { ApiConfig } from './ApiConfig';

const testConfig = {
    proyectName: 'test',
    rootPath: '/test',
    appPort: 1000,
    meli: {
        baseUrl: 'https://api.test.com'
    },
    author: {
        name: 'José Miguel',
        lastname: 'Morillo C.'
    }
};

jest.mock('./config.json', () => {
    return {
        "proyectName": "test",
        "rootPath": "/test",
        "appPort": 1000,
        "meli": {
            "baseUrl": "https://api.test.com"
        },
        "author": {
            "name": "José Miguel",
            "lastname": "Morillo C."
        }
    }
});
describe('ApiConfig Test', () => {
    it('config', () => {
        expect(ApiConfig.appPort).toEqual(1000);
        expect(ApiConfig.proyectName).toEqual('test');
        expect(ApiConfig.rootPath).toEqual('/test');
        expect(ApiConfig.meli).toEqual('https://api.test.com');
        expect(ApiConfig.author).toEqual({ name: 'José Miguel', lastname: 'Morillo C.'});
        expect(ApiConfig.config).toEqual(testConfig);
    });
});