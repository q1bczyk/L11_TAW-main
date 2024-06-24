const config = {
  port: process.env.PORT || 3001,
  databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://tester:oLikfGFetDmEkDUF@test.gooxams.mongodb.net/taw-projekt',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
