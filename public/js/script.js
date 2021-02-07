let form = document.getElementById('form');
if(form){
    form.addEventListener('submit', function(ev){

        if(this.dataset.id !== 'create'){
            ev.preventDefault();

            let data = {};

            Array.from(this.getElementsByTagName('input')).forEach(el => {
                console.log(el.value)
                data[el.name] = el.value;
            });

            fetch(this.action, {
                method: 'PUT', 
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    alert(data.message)
                });
        }
    });
}

Array.from(document.getElementsByClassName('del')).forEach(el => {
    el.addEventListener('click', function(){

        fetch('/user/' + this.dataset.id, {
            method: 'DELETE', 
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.parentNode.parentNode.remove();
                alert(data.message);
            });

    });
});