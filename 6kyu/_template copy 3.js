// DESCRIPTION
//
//
// Answer:
async function sayJoke(apiUrl, jokeId) {
    try {
        console.log(apiUrl, jokeId);
        const res = await fetch(apiUrl);
        console.log(res);
        if (!res) {
            console.log("OOPS!")
            throw Error(res.statusText);
        }
        const json = await res.json();
        json.saySetup = async function () {
            try {
                console.log("SAYSETUP", this.jokes[0]);
                const setup = this.jokes.find(e => e.id == jokeId);
                if (!setup) throw new Error("bad id in setup");
                return Promise.resolve(setup.setup);
            }
            catch (err) {
                console.log(err)
            }
        }
        json.sayJoke = async function () {
            try {
                console.log("SAYJOKE", this.jokes[0]);
            }
            catch (err) {
                console.log(err)
            }

        }
        return json;
    }
    catch (err) {
        console.log(new Error('Error: ', err));
    }

}