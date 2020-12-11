const env = process.env.NODE_ENV || "dev"

const config = () => {
    switch (env) {
        case "dev": 
        return {
            dbpath:"",
            jwt_key:"Navegacao",
            jwt_expires:"2d"
        }
        case "prod":
            return {
                dbpath:""
            }
    }
}

module.exports = config()
