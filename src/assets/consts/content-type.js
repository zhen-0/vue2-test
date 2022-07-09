/* eslint-disable camelcase */
const URL_ENCODED = 'application/x-www-form-urlencoded'
const JSON = 'application/json'
// form-data多用于文件上传   boundary不确定
const FORM_DATA = 'multipart/form-data; boundary=----WebKitFormBoundaryrGKCBY7qhFd3TrwA'
// octet-stream多用于文件下载
const OCTET_STREAM = 'application/octet-stream'

export default {
  url_encoded: URL_ENCODED,
  json: JSON,
  form_data: FORM_DATA,
  octet_stream: OCTET_STREAM,
}
