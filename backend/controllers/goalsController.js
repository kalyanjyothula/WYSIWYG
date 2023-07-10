const asyncHandler = require('express-async-handler');

const Goal = require("../models/goalModel")

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.findById({ userId: req.user.id })

  res.status(200).json(goals)
})

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.opinions) {
    res.status(400)
    throw new Error("Please add a opinions field !")
  }

  const goal = await Goal.create({
    opinions: req.body.opinions,
    userId: req.user.id
  })

  res.status(200).json(goal)

})

const updateGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found !')
  }

  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (goal.userId.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updateGoal)
});

const deleteGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found !')
  }

  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (goal.userId.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }


  await goal.remove()

  res.status(200).json({ id: req.params.id })
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal
}
