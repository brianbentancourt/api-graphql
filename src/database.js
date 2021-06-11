import mongoose from "mongoose"

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('>>> DB is connected <<<')
    } catch (error) {
        console.log('Something goes wrong!')
        console.log(error)
    }
}
