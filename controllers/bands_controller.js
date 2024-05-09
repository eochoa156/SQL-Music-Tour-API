bands.get('/:name', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { name: req.params.name  }
        })
        res.status(200).json(foundBand)
    } catch (error) {
        res.status(500).json(error)
    }
})

// DEPENDENCIES 
const { Band, MeetGreet, Event } = db 

[...]

// FIND A SPECIFIC BAND
bands.get('/:name', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { name: req.params.name  },
            include: { 
                model: MeetGreet, 
                as: "meet_greets", 
                include: {model: Event, as: "event"}
            }
        })
        res.status(200).json(foundBand)
    } catch (error) {
        res.status(500).json(error)
    }
})
