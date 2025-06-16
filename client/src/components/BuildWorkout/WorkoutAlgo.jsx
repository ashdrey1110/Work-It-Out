// This function selects a random option from anything passed in
// Could be used to pick the exercise or the set-rep variation
const pick = (options) => {
  return Math.floor(Math.random() * options.length);
};

// exerciseOptions will contain all potential exercises
// duration helps decide how many exercises to randomly pick
// setOptions provides the number of sets and then the ratio of number of reps
export default function GenerateWorkout(
  exerciseOptions,
  workoutType,
  setOptions,
  duration
) {
  const workoutMain = [];
  let numExercises;
  if (workoutType == "anaerobic_cardio" || "aerobic_cardio") {
    numExercises = Math.floor(duration / 15);
  } else {
    numExercises = Math.floor(duration / 9);
  }

  const availableExercises = [...exerciseOptions];

  if (numExercises > availableExercises.length) {
    return [
      "Hmm... It looks like we couldn't generate the best workout for you. Go Back and try again",
    ];
  }

  for (let i = 0; i < numExercises; i++) {
    let exerciseIndex = pick(availableExercises);
    let exerciseSelector = availableExercises[exerciseIndex];
    availableExercises.splice(exerciseIndex, 1);
    let exerciseName = exerciseSelector.name;
    let setSelector = pick(setOptions);
    let numSets = setOptions[setSelector].sets;
    let numReps;
    if (setOptions[setSelector].reps == 0.05) {
      numReps = exerciseSelector.low_reps;
    } else if (setOptions[setSelector].reps == 1.0) {
      numReps = exerciseSelector.high_reps;
    } else {
      numReps =
        Math.round(
          (exerciseSelector.low_reps +
            Math.floor(
              (exerciseSelector.high_reps - exerciseSelector.low_reps) *
                setOptions[setSelector].reps
            )) /
            exerciseSelector.rep_step
        ) * exerciseSelector.rep_step;
      // 1 + Math.floor((20 - 1)*(0.75)) = 15
      // 8 + Math.floor((20 - 8)*(0.75)) = 17
    }

    workoutMain.push({
      exercise: exerciseName,
      sets: numSets,
      reps: numReps,
    });
  }
  let workoutArray = workoutMain.map(
    (item) => `${item.sets} x ${item.reps} ${item.exercise}`
  );
  return workoutArray;
}

// TO-DO:
/*
  - do not include exercises like stair climber or walking etc...
*/
