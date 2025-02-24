export const Cuarto = ()=> {
    const promesa = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log("Dentro de la Promesa")
        },3000)
    });
    promesa.then(()=>{
        console.log("Then");
    })
    return(
        <div>

        </div>
    )
}
        