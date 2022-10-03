// loading console model
const vgConsole = require('../models/consoles')

// index
const findAllConsoles = (req, res) => {
    vgConsole.find({}, (err, foundConsole) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Index', {vgconsoles: foundConsole})
        }
    })
}

// new
const newConsole = (req, res) => {
    // console.log('Hello')
    res.render('New')
}

// delete
const deleteConsole = (req, res) => {

    vgConsole.findByIdAndDelete(req.params.id, (err, deleteConsole) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/products')
        }
    })
}

// update
const updateConsole = (req, res) => {
    if (req.body.isUsed === 'on') {
        req.body.isUsed = true
    } else {
        req.body.isUsed = false
    }

    vgConsole.findByIdAndUpdate(req.params.id, req.body, (err, foundConsole) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/products`)
        }
    })
}

// create
const createConsole = (req, res) => {
    if (req.body.isUsed === 'on') {
        req.body.isUsed = true
    } else {
        req.body.isUsed = false
    }
    // res.send(req.body)
    vgConsole.create(req.body, (err, createdConsole) => {
        if (err) {
            res.status(400).json(err)
        } else [
            res.status(200).redirect('/products/')
        ]
    })
}

// edit
const editConsole = (req, res) => {
    vgConsole.findById(req.params.id, (err, foundConsole) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('inside edit route')
            res.status(200).render('Edit', { vgconsole: foundConsole})
        }
    })
}

// show
const showUniqueConsole = (req, res) => {

    vgConsole.findById(req.params.id, (err, foundConsole) => {
        if (err) {
            // console.log('unable to render show')
            res.status(400).json(err)
        } else {
            // console.log('in show route')
            res.status(200).render('Show', { vgconsole: foundConsole })
        }
    })
}

module.exports = {
    findAllConsoles,
    newConsole,
    deleteConsole,
    updateConsole,
    createConsole,
    editConsole,
    showUniqueConsole
}