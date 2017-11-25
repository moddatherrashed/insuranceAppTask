var api = {
    getCat(url){
        return fetch(url).then((res) => res.json())
        .catch(error => alert(error));
    }
}
module.exports = api ;