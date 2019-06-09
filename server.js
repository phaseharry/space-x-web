const app = require('./server/app')
const { sync, seed } = require('./server/db')

const port = process.env.PORT || 3000

sync()
.then(() => seed())
.then(() => app.listen(port, () => console.log(`listening on port ${port}`)))
