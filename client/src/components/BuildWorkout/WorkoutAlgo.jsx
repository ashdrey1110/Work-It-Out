// This function selects a random option from anything passed in
// Could be used to pick the exercise or the set-rep variation
const pick = (options) => {
  return Math.floor(Math.random() * options.length);
};

export default function GenerateWorkout(exerciseOptions, setOptions, duration) {
  const workoutMain = [];
  const numExercises = Math.floor(duration / 7);

  for (let i = 0; i < numExercises; i++) {
    let exerciseName = exerciseOptions[pick(exerciseOptions)].name;
    let setSelector = pick(setOptions);
    let numSets = setOptions[setSelector].sets;
    let numReps = setOptions[setSelector].reps;
    workoutMain.push({
      exercise: exerciseName,
      sets: numSets,
      reps: numReps,
    });
  }

  console.log(
    workoutMain.map((item) => `${item.sets} x ${item.reps} ${item.exercise}`)
  );
}
