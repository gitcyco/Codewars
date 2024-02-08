// 4 kyu UriBuilder
//
// Create a basic UriBuilder object that will be used specifically to build query params on an existing URI.
// It should support a params property and a build method.
// It will handle the URL having pre-existing params that need to be managed.
// The URL must be properly encoded (i.e. "a b" should be encoded as "a%20b")
//
// Examples of how the builder will be used:
//
//
// var builder = new UriBuilder('http://www.codewars.com')
// builder.params.page = 1
// builder.params.language = 'javascript'
//
// // new builder instance to demonstrate pre-existing params.
// builder = new UriBuilder('http://www.codewars.com?page=1')
//
// builder.params.page = 2
// // should return 'http://www.codewars.com?page=2'
// builder.build()
//
// // if you delete params then they will disappear from the url string
// delete builder.params.page
//
// // should return 'http://www.codewars.com'
// builder.build()
//
// Answer:
class UriBuilder {
  constructor(url) {
    this.params = {};
    [this._url, this._inputParams] = url.split("?");
    const items = this._inputParams.split("&");
    for (let item of items) {
      const [key, val] = item.split("=");
      this.params[key] = val;
    }
  }
  build() {
    let out = this._url;
    const arr = [];
    if (Object.keys(this.params).length > 0) out += "?";
    for (let [key, val] of Object.entries(this.params)) {
      val = ("" + val).replace(/\s/, "%20");
      arr.push(`${key}=${val}`);
    }
    out += arr.join("&");
    return out;
  }
}
