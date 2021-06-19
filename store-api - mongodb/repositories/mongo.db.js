import mongodb from "mongodb";

function getClient() {
    const uri = "mongodb+srv://root:igti@cluster0.pi7nj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    return new mongodb.MongoClient(uri);
}

export { getClient }