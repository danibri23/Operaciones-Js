const args = {
    operation: 3,
    data: 233,
    recipients: ['1', '2']
}


const realizarOperaciones = ( args ) => { 
    const { operation, data, recipients } = args

    if (operation === undefined) {
        console.log({ error: 0, errorInfo: 'falta de operation' })
        return

    } if (operation !== 1 && operation !== 2 && operation !== 3) {
        console.log({ error: 1, errorInfo: 'operation no valido' })
       return

    } if (operation === 1 && typeof data !== 'number') {
        console.log({ error: 2, errorInfo: 'data debe de ser un numero' })
        return

    } if ( operation === 2 && recipients.length === 0 || operation === 3 && recipients.length === 0 ) {
        console.log({ error: 3, errorInfo: 'recipients debe tener valores' })        
        return
    }

    if ( operation === 1 ) {
        console.log(suma(data));
    } 

    else if ( operation === 2 ) {
        // sentMessage(recipients)
        // .then(res=>{console.log(res)})
        // .catch((err)=>{console.log(err)})

        try {
            const processMessage = async () => {
                const res = await sentMessage(recipients)
                console.log(res);
            }
            processMessage()

        } catch (error) {
            console.log(error);
        }

    }

   
}

const suma = ( data ) => {
    
    const dataString = data.toString()
    let suma = 0 

    for ( let i = 0; i < dataString.length; i++ ) {
        suma += parseInt(dataString[i])
    }

    return suma
}

const sentMessage = ( recipients ) => {

    const counterMessage =  recipients.length
    const seconds = counterMessage * 1000

    return new Promise((resolve) => {
        time(seconds).then(() => {
            resolve({ sent: counterMessage })
        })
    })
}

const time = (ms) => {
    return new Promise (resolve => setTimeout(resolve, ms))
}

realizarOperaciones(args)

