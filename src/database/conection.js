import sql from 'mssql'

const dbSettings = {
    user: "sa", 
    password: "Axoft1988", 
    server: "extralarge.dyndns.biz, 5020", 
    database: "LAKER_SA", 
}

sql.connect(dbSettings)