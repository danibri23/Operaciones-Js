
const realizarOperaciones = () => { 
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

   
}
