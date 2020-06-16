console.log('module')

async function start(){
    return await Promise.resolve('async working')
}

start().then(console.log);