const Plant = require("../models/plantModel");
const mongoose = require("mongoose");

const getPlants = async (req, res) => {
  const plants = await Plant.find({}).sort({ createdAt: -1 });
  res.status(200).json(plants);
};

const getPlant = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No plant" })
    }
    const plant = await Plant.findById(id)

    if(!plant) {
        return res.status(400).json({ error: "No plant" })
    }
    res.status(200).json(plant)
}

const addPlant = async (req, res) => {

  let emptyFields = []

  const {
    plantName,
    quickInfo,
    light,
    water,
    repot,
    feed,
    nextWater,
    lastFeed,
    lastRepot,
  } = req.body;

  if(!plantName) {
    emptyFields.push('plantName')
  }
  if(!quickInfo) {
    emptyFields.push('quickInfo')
  }
  if(!light) {
    emptyFields.push('light')
  }
  if(!water) {
    emptyFields.push('water')
  }
  if(!repot) {
    emptyFields.push('repot')
  }
  if(emptyFields.length > 0){
    return res.status(400).json({ error: 'Please fill highlighted fields', emptyFields})
  }


  try {
    const plant = await Plant.create({
      plantName,
      quickInfo,
      light,
      water,
      repot,
      feed,
      nextWater,
      lastFeed,
      lastRepot,
    });
    res.status(200).json(plant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePlant = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No plant" })
    }

    const plant = await Plant.findOneAndDelete({ _id: id })

    if (!plant) {
        return res.status(400).json({ error: "No plant" })
    }

    res.status(200).json(plant)
}

const updatePlant = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No plant" })
    }

    const plant = await Plant.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!plant) {
        return res.status(400).json({ error: "No plant" })
    }
    res.status(200).json(plant)
}

module.exports = {
  getPlants,
  getPlant,
  addPlant,
  deletePlant,
  updatePlant
};
