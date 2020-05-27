let obj = {
    "peureo" : "dsdlsdksd"
};

let objectStringPropertiesToMap = (obj: Object) => {
    let map = new Map<string, string>();

    for (let key in obj) {
        let val = obj[key];

        if (typeof val == "string")
            map.set(key, val);
    }

    return map;
};

let map = objectStringPropertiesToMap(obj);

document.getElementById("output").innerHTML = map.get("peureo");
