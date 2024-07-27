module.exports = app => {
    const Stat = app.mongoose.model('Stat', {
        users: Number,
        categories: Number,
        articles: Number,
        createdAt: Date
    })

    const get = (req, res) => {
        Stat.findOne({}, {}, { sort: { 'createdAt': -1 } })
            .then(stat => res.json(stat))
            .catch(err => res.status(500).send(err))
    }

    return { Stat, get }
}