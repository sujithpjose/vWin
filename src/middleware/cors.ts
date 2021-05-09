/* const allowedOrigins = [
    'http://localhost:4200',
    'http://http://ec2-13-232-122-182.ap-south-1.compute.amazonaws.com:3000'
];

const auth = async (req: any, res: any, next: any) => {
    origin: function (origin: any, callback: any) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
};

module.exports = auth; */