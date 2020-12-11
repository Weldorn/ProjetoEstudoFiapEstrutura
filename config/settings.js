const env = process.env.NODE_ENV || "dev"

const config = () => {
    switch (env) {
        case "dev": 
        return {
            dbpath:"mongodb+srv://weldorn:Alunos@123@cluster0.2rosu.mongodb.net/banco?retryWrites=true&w=majority",
            jwt_key:"Navegacao",
            jwt_expires:"2d"
        }
        case "prod":
            return {
                dbpath:"mongodb+srv://weldorn:Alunos@123@cluster0.2rosu.mongodb.net/banco?retryWrites=true&w=majority"
            }
    }
}

module.exports = config()