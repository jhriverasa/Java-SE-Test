import axios from "axios";

/**
 * Allows to perform an http request using axios
 *
 * @see https://www.npmjs.com/package/axios
 *
 * Receives an Object cointaning following attributes: 
 * 
 * @param reqOption Specifies Http Req method | Any String from: ['get', 'post', 'put', 'delete', 'connect', 'options']
 * @param path Specifies the path | String path
 * @param params (Optional) Parameters to be used | Object. {id: 123}
 * @param onSuccess Callback for a sucessful request  | Function. (response)=>{doStuffWithRes(response) }
 * @param onError Callback for a failed request | Function. Function. (error)=>{doStuffWithRes(response) }
 * @param callback (Optional) Callback always executed | Function. ()=>{ alwaysExecuteThis() }
 */

const axiosReq = ({
  reqOption,
  path,
  params = {},
  onSuccess,
  onError,
  callback = () => {},
}) => {
  //GET and POST but there are many others, including HEAD, PUT, DELETE, CONNECT, and OPTIONS.
  axios[reqOption](path, {
    params,
  })
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onError(error);
    })
    .finally(callback);
};

export { axiosReq };
