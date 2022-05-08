import { EStatusCode } from '../enums/EStatusCode';
import { IResponse } from '../interfaces/IResponse';


/**
 * Formats the response from the service
 * @param {EStatusCode} code
 * @param {string} message
 * @param {T} payload
 * @returns {IResponse<T>}
 */
export const formattedResponse = <T>(code: EStatusCode, message: string, payload: T ): IResponse<T> => {
    return {
        code,
        message,
        payload,
    } as IResponse<T>
}
