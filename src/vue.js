class Vue {
    constructor() {
        this.element = document.querySelector("html");
    }

    async getValues(properties_file_url) { // : Map<string, string>
        let result = await (await fetch(properties_file_url)).json();
        console.log(result);
        return result;
    }

    replaceTemplateValue(result) {
        this.element.textContent.match(/{{ .* }}/g).forEach(m => {
            let key = m.match(/ (.*?) /)[1];
            console.log("-> replace", m, "with", result[key]);
            if (key.startsWith('_')) {
                document.title = result[key];
            } else {
                document.body.innerHTML = document.body.innerHTML.replace(new RegExp(`${m}`, 'g'), result[key]);
            }
        });
        this.element.style.visibility = "visible";
    }
}

let vue = new Vue();
vue.getValues("assets/values.json").then(result => vue.replaceTemplateValue(result));