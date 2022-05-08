import { ApiConfig } from './config/ApiConfig';
import { api } from './api';
/**
 * default port to listen
 */
const port = ApiConfig.appPort;

api.listen(port, () => {
    console.info(`server started at http://localhost:${port}`);
    console.info(`${ApiConfig.rootPath}/health`);
});
